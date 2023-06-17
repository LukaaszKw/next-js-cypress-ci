import FancyButton from '@/components/FancyButton/FancyButton'
import HorizonUI from '@/components/HorizonUI/HorizonUI'
import React from 'react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FancyButton />
      <HorizonUI />
    </main>
  )
}