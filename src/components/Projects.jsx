import React from 'react'
import { useNavigate, useNavigation } from 'react-router-dom';
import styled from 'styled-components'
import { ProjectData } from '../Data';

const Container = styled.div `
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width:none;
scroll-snap-align: center;
&::-webkit-scrollbar{
  display: none;
}
`;
const Projects = () => {
    const navigate=useNavigate();
    return (
        <Container className="min-h-screen flex flex-col justify-start  items-center px-10 snap-start scroll-smooth py-10">
            <div className="flex flex-col gap-10 text-white ">
                <div className="">
                    <h1 className="text-7xl text-center font-bold">Projects</h1>
                </div>

                <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-5 -mt-5" >
                    {
                        ProjectData.map((item) => {
                            return (
                                <div key={item.id} className="flex px-4 py-3 flex-col w-80 justify-center items-center gap-2 shadow-lg shadow-white">
                                <a href={`${item.git}`} target='_blank'><img src={`${item.url}`} className='w-72 h-72' alt=""/></a> 
                                    <h4 className="text-lg font-bold whitespace-nowrap">{ item.title}</h4>
                                    <p className="italic text-md text-start">{item.desc }</p>
                           </div>
                            )
                        })
                    }


                  
                </div>
            </div>
        </Container>
    )
}

export default Projects
