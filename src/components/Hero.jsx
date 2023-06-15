import React from 'react'
import styled from 'styled-components';
import NavBar from './NavBar';
import {
    OrbitControls,
    Stage
} from '@react-three/drei'
import {
    Canvas
} from '@react-three/fiber'
import {
    Model
} from './Model';
import { Astronaut } from './Astronaut';

const Section = styled.div `
 
 height: 100%;
scroll-snap-align: center;
  

  
`;
const Hero = () => {
    return (
        <Section>
           
            <div className="snap-center-scroll flex h-screen w-full justify-center flex-col lg:flex-row items-center lg:justify-between lg:px-10 place-items-center gap-4 mt-3">

                <div className= "p-5 flex flex-col w-full h-full justify-center items-center">
                    <div className="  flex flex-col gap-4">
                        <h1 className=" text-7xl lg:text-9xl font-extrabold">Parashar</h1>
                        <h1 className=" text-6xl lg:text-5xl font-extrabold text-[#dd4c20]">Neupane</h1>
                        <p className="text-lg">I am Parashar Neupane from Nepal.I am Studying BCA from Tribhuwan University.I am currently learning MERN stack web development and along with my university syllabus.I am currently open for JOB or Internships.Thank You!</p>
                    </div>
                </div>
                <div className="w-fit h-fit lg:w-3/4 lg:h-3/4 rounded-full">
                    <Canvas camera={{position:[2,-12,2],fov:90}}>
                        <OrbitControls enableZoom={false}
                            autoRotate={true}
                            
                        />
                        <Stage intensity={0.7}
                            scale={4}>
                            <Model/>
                        </Stage>
                    </Canvas>
                </div>


            </div>
        </Section>
    )
}

export default Hero
