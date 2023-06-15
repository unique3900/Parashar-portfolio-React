import React from 'react'
import styled from 'styled-components';

const Section = styled.div `
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Skills = () => {
  return (
    <Section>
      
          <div className="h-screen flex flex-col gap-5">
              <div className="">
                  <h1 className="text-8xl">Skills</h1>
              </div>
          </div>
    </Section>
  )
}

export default Skills
