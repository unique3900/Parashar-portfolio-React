import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Skills from './components/Skills'

const App = () => {
  return (
    <div className="min-h-screen object-cover flex flex-col scrollbar-hide bg-[url('/img/bg.jpeg')] bg-repeat">
      <NavBar />
      <Hero />
      <Skills />
      
    </div>
  )
}

export default App
