import React from 'react'

const Skills = () => {
  return (
    <div className="min-h-screen flex flex-col justify-start  items-center px-10 snap-center scroll-smooth py-10">
      <div className="flex flex-col gap-10 text-white ">
        <div className="">
          <h1 className="text-7xl text-center font-bold">My Skills</h1>
        </div>
        <div className="grid grid-flow-col grid-rows-3
        lg:grid-flow-row lg:grid-cols-4 
        gap-14">
          <div className="flex px-4 py-3 flex-col justify-center items-center gap-2 shadow-lg shadow-white">
            <img src="./img/reactlogo.png" className='w-44 H-44' alt="" />
            <h4 className="text-lg font-bold whitespace-nowrap">React JS</h4>
          </div>

          <div className="flex px-4 py-3 flex-col justify-center items-center gap-2 shadow-lg shadow-white">
            <img src="./img/nodejslogo.png" className='w-44 H-44' alt="" />
            <h4 className="text-lg font-bold">Node JS</h4>
          </div>

          <div className="flex px-4 py-3 flex-col justify-center items-center gap-2 shadow-lg shadow-white">
            <img src="./img/express js.png" className='w-44 H-44' alt="" />
            <h4 className="text-lg font-bold">Express JS</h4>
          </div>

          <div className="flex px-4 py-3 flex-col justify-center items-center gap-2 shadow-lg shadow-white">
            <img src="./img/mongodblogo.png" className='w-44 H-44' alt="" />
            <h4 className="text-lg font-bold">React JS</h4>
          </div>
          <div className="flex px-4 py-3 flex-col justify-center items-center gap-2 shadow-lg shadow-white">
            <img src="./img/mysqllogo.png" className='w-44 H-44' alt="" />
            <h4 className="text-lg font-bold">Mysql</h4>
          </div>
          <div className="flex px-4 py-3 flex-col justify-center items-center gap-2 shadow-lg shadow-white">
            <img src="./img/redux.png" className='w-44 H-44' alt="" />
            <h4 className="text-lg font-bold">Redux</h4>
          </div>
          <div className="flex px-4 py-3 flex-col justify-center items-center gap-2 shadow-lg shadow-white">
            <img src="./img/tailwindlogo.png" className='w-44 H-44' alt="" />
            <h4 className="text-lg font-bold">Tailwind</h4>
          </div>
          <div className="flex px-4 py-3 flex-col justify-center items-center gap-2 shadow-lg shadow-white">
            <img src="./img/phplogo.png" className='w-44 H-44' alt="" />
            <h4 className="text-lg font-bold">PHP</h4>
          </div>
  

          

        </div>
        
      </div>
    </div>
  )
}

export default Skills
