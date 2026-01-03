import React from 'react'
import Hero from '../components/Hero'
import Courses from '../components/Courses'

export default function Home(){
  return (
    <div>
      <Hero />
      <main className="container my-5">
        <Courses />
      </main>
    </div>
  )
}
