'use client'
import dynamic from 'next/dynamic'

const Something = dynamic(() => import('@/routes/Something'), { ssr: false })

export default function SomethingPage() {
  return <Something />
}

