import React, { useEffect, useRef } from 'react'
import * as THREE from 'three';

export default function Something() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const cubeRef = useRef(null);
  const animationRef = useRef(null);
  
  useEffect(() => {
    // Default setting
    // useRef - для сохранения ссылок на DOM элементы (изначально при каждом рендере создавался объект three.js = утечка памяти и fail)
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z = 5;
    cameraRef.current = camera;
    
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    rendererRef.current = renderer;

    const geometry = new THREE.BoxGeometry( 1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh( geometry, material);
    cubeRef.current = cube;
    scene.add( cube );

    containerRef.current.appendChild(renderer.domElement);

    // для адаптива
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window,addEventListener('resize', handleResize);

    // функция для анимации
    const animate = ()  => {
      if(cubeRef.current) { 
        cubeRef.current.rotaion.x += 0.01;
        cubeRef.current.rotaion.y += 0.01;
      }

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    }
      
  })
  

  return (
    animate(cube, renderer)
  )
}

function animate(cube, renderer) {

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render( scene, camera );

}