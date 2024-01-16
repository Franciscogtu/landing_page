import React from 'react'

const ProjectItem = ({img,tittle}) => {
  return (
    <div className='relative flex items-center justify-center h-[400px] w-full  shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
        <img src={img} alt="/"  className='w-full h-full rounded-xl group-hover:opacity-10'/>
        <div className='hidden group-hover:block absolute '>
            <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
                {tittle}
            </h3>
            <p className='pb-4 pt-2 text-white text-center'>Node Js</p>
            <a href="/"></a>
            <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'> More Info </p>
        </div>


    </div>
  )
}

export default ProjectItem