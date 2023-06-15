import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import styled from 'styled-components'
import Projects from './components/Projects'
import { BrowserRouter } from 'react-router-dom'

const Container = styled.div`
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width:none;
&::-webkit-scrollbar{
  display: none;
}
`;
const App = () => {
  return (
    <BrowserRouter>
      
      <Container className="min-h-screen shadow-black shadow-sm  flex flex-col scrollbar-hide bg-[url('/img/bg.jpeg')] bg-blend-normal object-cover">
      <NavBar />
      <Hero />
      <Skills />
      <Projects/>
    </Container>
    </BrowserRouter>

  )
}

export default App
