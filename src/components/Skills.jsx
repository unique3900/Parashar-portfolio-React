import React from 'react'
import styled from 'styled-components';
import { skillsData } from '../Data';


const Container = styled.div`
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width:none;
scroll-snap-align: center;
&::-webkit-scrollbar{
  display: none;
}
`;
const Skills = () => {
  return (
    <Container className="min-h-screen flex flex-col justify-start  items-center px-10 snap-center scroll-smooth py-10">
      <div className="flex flex-col gap-10 text-white ">
        <div className="">
          <h1 className="text-7xl text-center font-bold">My Skills</h1>
        </div>
        <div className="grid grid-flow-row grid-cols-2
        lg:grid-flow-row lg:grid-cols-4 
        gap-14">
          {
            skillsData.map((item) => {
              return (
                <div key={item.id} className="flex px-4 py-3 flex-col justify-center items-center gap-2 shadow-lg shadow-white">
                <img src={`${item.url}`} className='w-44 H-44' alt="" />
                  <h4 className="text-lg font-bold whitespace-nowrap">{item.title}</h4>
              </div>
              )
            })
          }


          

         
          

          

        </div>
        
      </div>
    </Container>
  )
}

export default Skills
