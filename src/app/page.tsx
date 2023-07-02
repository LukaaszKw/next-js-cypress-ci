import FancyButton from '@/components/FancyButton/FancyButton'
import HoverButton from '@/components/HoverButton/HoverButton'
import HorizonUI from '@/components/HorizonUI/HorizonUI'
import React from 'react'
import Counter from '@/components/Counter/Counter'
import HorizontalCard from '@/components/HorizontalCard/HorizontalCard'
import Table from '@/components/Table/Table'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FancyButton />
      <HoverButton/>
      <HorizonUI />
      <Counter />
      <HorizontalCard />
      <Table />
    </main>
  )
}