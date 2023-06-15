import React from 'react'
import styled from 'styled-components'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Skills from './components/Skills';

const Container = styled.div`
height:100vh;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width:none;
color: white;
background: url("./img/bg.jpeg");
&::-webkit-scrollbar{
  display: none;
}
`;
const App = () => {
  return (
    <>
     
      <Container>
      <NavBar/>
      <Hero />
      <Skills/>
    </Container>
    </>
    
  )
}

export default App
