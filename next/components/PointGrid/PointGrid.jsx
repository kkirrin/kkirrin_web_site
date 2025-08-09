"use client"
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function PointGrid({ spacingPx = 24, pointSize = 4, color = 0xc5c5c5, radiusCells = 3 }) {
  const containerRef = useRef(null)
  const rendererRef = useRef(null)
  const sceneRef = useRef(null)
  const cameraRef = useRef(null)
  const pointsRef = useRef(null)
  const restPositionsRef = useRef(null)
  const velocitiesRef = useRef(null)
  const noisePhaseRef = useRef(null)
  const animRef = useRef(0)
  const mouseRef = useRef({ x: 9999, y: 9999 })
  const radiusRef = useRef({ r: 0.2 })
  const dimsRef = useRef({ cols: 0, rows: 0 })
  const timeRef = useRef({ last: 0 })

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    sceneRef.current = scene

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    rendererRef.current = renderer
    container.appendChild(renderer.domElement)

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
    camera.position.z = 1
    cameraRef.current = camera

    function buildGrid(width, height) {
      const aspect = width / height
      camera.left = -aspect
      camera.right = aspect
      camera.top = 1
      camera.bottom = -1
      camera.updateProjectionMatrix()

      renderer.setSize(width, height)

      const cols = Math.max(1, Math.floor(width / spacingPx))
      const rows = Math.max(1, Math.floor(height / spacingPx))
      dimsRef.current = { cols, rows }
      const dx = (2 * aspect) / cols
      const dy = 2 / rows

      // radius in world units based on grid spacing
      radiusRef.current.r = Math.hypot(dx, dy) * radiusCells

      const count = cols * rows
      const positions = new Float32Array(count * 3)
      const rest = new Float32Array(count * 3)
      const velocities = new Float32Array(count * 2)
      const phases = new Float32Array(count)
      let idx = 0
      let p = 0
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = -aspect + (c + 0.5) * dx
          const y = 1 - (r + 0.5) * dy
          positions[idx] = x; rest[idx++] = x
          positions[idx] = y; rest[idx++] = y
          positions[idx] = 0; rest[idx++] = 0
          velocities[p * 2] = 0
          velocities[p * 2 + 1] = 0
          phases[p] = Math.random() * Math.PI * 2
          p++
        }
      }

      const geom = new THREE.BufferGeometry()
      geom.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      const mat = new THREE.PointsMaterial({ color, size: pointSize, sizeAttenuation: false, transparent: true, opacity: 0.9 })
      const pts = new THREE.Points(geom, mat)

      if (pointsRef.current) {
        scene.remove(pointsRef.current)
        pointsRef.current.geometry.dispose()
        pointsRef.current.material.dispose()
      }
      pointsRef.current = pts
      restPositionsRef.current = rest
      velocitiesRef.current = velocities
      noisePhaseRef.current = phases
      scene.add(pts)
      renderer.render(scene, camera)
    }

    function toWorld(clientX, clientY) {
      const rect = renderer.domElement.getBoundingClientRect()
      const x = ((clientX - rect.left) / rect.width) * 2 - 1
      const y = -((clientY - rect.top) / rect.height) * 2 + 1
      const v = new THREE.Vector3(x, y, 0)
      v.unproject(camera)
      return v
    }

    function onMouseMove(e) {
      const v = toWorld(e.clientX, e.clientY)
      mouseRef.current.x = v.x
      mouseRef.current.y = v.y
    }
    function onTouchMove(e) {
      const t = e.touches?.[0]
      if (!t) return
      const v = toWorld(t.clientX, t.clientY)
      mouseRef.current.x = v.x
      mouseRef.current.y = v.y
    }

    function handleResize() {
      const w = container.clientWidth
      const h = Math.max(1, window.innerHeight)
      buildGrid(w, h)
    }

    function animate(t = 0) {
      const pts = pointsRef.current
      if (pts) {
        const dtRaw = timeRef.current.last ? (t - timeRef.current.last) / 1000 : 1 / 60
        const dt = Math.min(0.033, Math.max(0.008, dtRaw))
        timeRef.current.last = t

        const posAttr = pts.geometry.getAttribute('position')
        const pos = posAttr.array
        const rest = restPositionsRef.current
        const vel = velocitiesRef.current
        const phases = noisePhaseRef.current
        const { cols, rows } = dimsRef.current
        const rad = radiusRef.current.r
        const mx = mouseRef.current.x
        const my = mouseRef.current.y
        const r2 = rad * rad

        // Parameters
        const kSpring = 12.0
        const damping = 2.2
        const waveTension = 28.0
        const mousePush = 22.0
        const noiseAmp = 0.15
        const noiseFreq = 1.5

        // Helper to access point index
        const idxOf = (r, c) => r * cols + c

        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const pIndex = idxOf(r, c)
            const i3 = pIndex * 3
            const i2 = pIndex * 2
            const x = pos[i3]
            const y = pos[i3 + 1]
            const rx = rest[i3]
            const ry = rest[i3 + 1]

            // Spring to rest
            let ax = -kSpring * (x - rx)
            let ay = -kSpring * (y - ry)

            // Mouse repulsion within radius (smooth falloff)
            const dxm = x - mx
            const dym = y - my
            const d2 = dxm * dxm + dym * dym
            if (d2 < r2) {
              const invD = 1 / (Math.sqrt(d2) + 1e-4)
              const w = 1 - d2 / r2
              ax += (dxm * invD) * mousePush * w
              ay += (dym * invD) * mousePush * w
            }

            // Wave coupling (4-neighborhood Laplacian)
            let nx = 0, ny = 0, countN = 0
            if (c > 0) { nx += pos[i3 - 3]; ny += pos[i3 - 2]; countN++ }
            if (c < cols - 1) { nx += pos[i3 + 3]; ny += pos[i3 + 4]; countN++ }
            if (r > 0) { const j = i3 - cols * 3; nx += pos[j]; ny += pos[j + 1]; countN++ }
            if (r < rows - 1) { const j = i3 + cols * 3; nx += pos[j]; ny += pos[j + 1]; countN++ }
            if (countN > 0) {
              nx /= countN; ny /= countN
              ax += (nx - x) * waveTension
              ay += (ny - y) * waveTension
            }

            // Light noise for natural motion
            const phase = phases[pIndex]
            ax += Math.sin(t * 0.001 * noiseFreq + phase) * noiseAmp
            ay += Math.cos(t * 0.001 * noiseFreq + phase) * noiseAmp

            // Damping and integrate
            const vx = (vel[i2] + ax * dt) * Math.exp(-damping * dt)
            const vy = (vel[i2 + 1] + ay * dt) * Math.exp(-damping * dt)
            vel[i2] = vx
            vel[i2 + 1] = vy

            pos[i3] = x + vx * dt
            pos[i3 + 1] = y + vy * dt
          }
        }

        posAttr.needsUpdate = true
        renderer.render(scene, camera)
      }
      animRef.current = requestAnimationFrame(animate)
    }

    // Init
    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    animRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onTouchMove)
      try { container.removeChild(renderer.domElement) } catch {}
      if (pointsRef.current) {
        pointsRef.current.geometry.dispose()
        pointsRef.current.material.dispose()
      }
      renderer.dispose()
    }
  }, [spacingPx, pointSize, color, radiusCells])

  return (
    <div ref={containerRef} style={{ position: 'absolute', height:"100vh", width: "", top: 0, left: 0, right: 0, bottom: 0, inset: 0, pointerEvents: 'none' }} />
  )
}

