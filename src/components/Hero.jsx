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
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Hero = () => {
    return (
        <Section>
           
            <div className="-z-1 lg:z-10 flex h-screen w-full justify-center flex-col lg:flex-row items-center lg:justify-between lg:px-10 gap-4 mt-3">

                <div className= "p-5 flex flex-col w-full h-full justify-center items-center">
                    <div className="  flex flex-col gap-4">
                        <h1 className=" text-7xl lg:text-9xl font-extrabold">Parashar</h1>
                        <h1 className=" text-6xl lg:text-5xl font-extrabold text-[#dd4c20]">Neupane</h1>
                        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quibusdam adipisci aspernatur, quae autem explicabo, odit quisquam, iure sequi voluptate expedita sint minus eos magni veniam officia aliquam asperiores odio! Libero at, quod perferendis aut fugit totam labore dicta, nihil adipisci accusamus quisquam qui assumenda rerum eos? Iusto, ipsum esse!</p>
                    </div>
                </div>
                <div className=" w-3/4 h-3/4 rounded-full">
                    <Canvas camera={{position:[2,-12,2],fov:90}}>
                        <OrbitControls enableZoom={true}
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
