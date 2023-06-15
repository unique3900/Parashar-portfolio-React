import React from 'react'
import styled from 'styled-components';
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
import {
    ReactModel
} from './3Ds/React';

const Section = styled.div `
 height: 100%;
scroll-snap-align: center;


`;
const Skills = () => {
    return (
        <Section>

            <div className="snap-center-scroll h-screen lg:h-screen flex flex-col gap-8 justify-center place-items-center items-center ">
                <div className="">
                    <h1 className="text-6xl font-bold lg:text-8xl text-center">Skills</h1>
                </div>
                <div className="flex flex-col gap-5 lg:flex-row  justify-around px-10">
                    <div className="flex flex-col justify-center items-center p-5 gap-5 shadow-white shadow-lg">
                        <div className="">
                            <Canvas>
                                <OrbitControls enableZoom={false} autoRotate={true}/>
                                <Stage intensity={0.7}
                                    scale={15}>
                                    <ReactModel/>
                                </Stage>
                            </Canvas>

                        </div>

                        <div className="flex flex-col gap-5">
                            <h3 className='text-center font-bold text-xl'>React JS</h3>
                            <p className="italic">I have a decent knowledge of react js which I can use in different projects.
                            Till date I have created Ecommerce website,Blogging site,Travel managemene site and several other mini projects with React Js. I have knowlege of axios,Redux,Context API which I use to communicate with the backend from react app.
                            </p>
                        </div>

                    </div>

                    <div className="flex flex-col justify-center items-center p-5 gap-5 shadow-white shadow-lg">
                        <div className="">
                            <Canvas>
                                <OrbitControls enableZoom={false} autoRotate={true}/>
                                <Stage intensity={0.7}
                                    scale={15}>
                                    <ReactModel/>
                                </Stage>
                            </Canvas>

                        </div>

                        <div className="flex flex-col gap-5">
                            <h3 className='text-center font-bold text-xl'>React JS</h3>
                            <p className="italic">I have a decent knowledge of react js which I can use in different projects.
                            Till date I have created Ecommerce website,Blogging site,Travel managemene site and several other mini projects with React Js. I have knowlege of axios,Redux,Context API which I use to communicate with the backend from react app.
                            </p>
                        </div>

                    </div>

                    <div className="flex flex-col justify-center items-center p-5 gap-5 shadow-white shadow-lg">
                        <div className="">
                            <Canvas>
                                <OrbitControls enableZoom={false} autoRotate={true}/>
                                <Stage intensity={0.7}
                                    scale={15}>
                                    <ReactModel/>
                                </Stage>
                            </Canvas>

                        </div>

                        <div className="flex flex-col gap-5">
                            <h3 className='text-center font-bold text-xl'>React JS</h3>
                            <p className="italic">I have a decent knowledge of react js which I can use in different projects.
                            Till date I have created Ecommerce website,Blogging site,Travel managemene site and several other mini projects with React Js. I have knowlege of axios,Redux,Context API which I use to communicate with the backend from react app.
                            </p>
                        </div>

                    </div>

                    <div className="flex flex-col justify-center items-center p-5 gap-5 shadow-white shadow-lg">
                        <div className="">
                            <Canvas>
                                <OrbitControls enableZoom={false} autoRotate={true}/>
                                <Stage intensity={0.7}
                                    scale={15}>
                                    <ReactModel/>
                                </Stage>
                            </Canvas>

                        </div>

                        <div className="flex flex-col gap-5">
                            <h3 className='text-center font-bold text-xl'>React JS</h3>
                            <p className="italic">I have a decent knowledge of react js which I can use in different projects.
                            Till date I have created Ecommerce website,Blogging site,Travel managemene site and several other mini projects with React Js. I have knowlege of axios,Redux,Context API which I use to communicate with the backend from react app.
                            </p>
                        </div>

                    </div>
 
 
 
 
                </div>
            </div>
        </Section>
    )
}

export default Skills
