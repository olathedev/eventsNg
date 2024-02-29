import React from 'react'
import Nav from '../components/landingpage/Nav'
import Hero from '../components/landingpage/Hero'
import Features from '../components/landingpage/features'

function Home() {
  return (
    <div>

      <div className="w-full bg-secondary">
      <Hero />
     
      </div>

      <Features />
    </div>
  )
}

export default Home