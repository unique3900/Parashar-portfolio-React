import {
    OrbitControls,
    Stage
} from '@react-three/drei'
import {
    Canvas
} from '@react-three/fiber'
import React from 'react'
import {
    Model
} from './3Ds/Model'
import { Astronaut } from './3Ds/Astronaut'
import { Planet } from './3Ds/Planet'
import styled from 'styled-components'

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

const Hero = () => {
    return (
        <Container id='hero' className="min-h-screen overflow-y-scroll justify-center  flex flex-col  items-center px-20 snap-start scroll-smooth">
            <div className="flex flex-col lg:flex-row gap-5 w-full h-[770px] lg:h-[500px]  items-center justify-center">
                <div className="w-full">
                    <div className="flex flex-col h-full  items-start gap-3">
                        <h1 className="text-7xl lg:text-9xl text-white font-extrabold">Parashar</h1>
                        <h2 className="text-6xl lg:text-7xl font-extrabold text-orange-700">Neupane</h2>
                        <p className=" text-xl text-white">I am Parashar Neupane from Nepal.I am Studying BCA from Tribhuwan University.I am currently learning MERN stack web development and along with my university syllabus.I am currently open for JOB or Internships.Thank You!</p>
                    </div>
                </div>
                <div className="flex items-center h-[250px] lg:h-full  w-full">
                    <Canvas camera={
                            {
                                position: [
                                 1000, -100, 490
                                ],
                                fov: 90
                            }
                        }
                        className=''>
                        <OrbitControls enableZoom={false}
                            autoRotate={true} />
                        <Stage intensity={1.9}
                            scale={14} shadows={false}>
                            <Planet/>
                        </Stage>
                    </Canvas>
                </div>
            </div>
        </Container>
    )
}

export default Hero
