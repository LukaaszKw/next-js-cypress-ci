import FancyButton from '@/components/FancyButton/FancyButton'
import HoverButton from '@/components/HoverButton/HoverButton'
import React from 'react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FancyButton />
      <HoverButton/>
    </main>
  )
}