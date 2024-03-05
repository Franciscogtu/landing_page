import React from 'react'
import Work from './Work'
import { Carousel, Typography, Button } from "@material-tailwind/react";


const WorkItem = ({year,work,company,duration,details}) => {
  return (
    
  

<ol className='flex flex-col md:flex-row relative border-l border-stone-400'>
     <li className='mb-2 ml-6 pt-2'>
        <div className='absolute w-3 h-3 bg-stone-20 rounded-full mt-1,5 -left-1.5 border-white'/>
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start texts-xs md:text-sm'>
            <span className='inline-block px-3 py-2 font-semibold text-white bg-cyan-600 rounded-md'>{year}</span>
            <span className='text-lg font-semibold text-cyan-600'>{work}</span>
            <span className='m-1 text-base font-semibold md:text-sm'>{company}</span>
            <span className='m-1 text-sm font-normal leading-none text-stone-400'>{duration}</span>
           
        </p>
        <p className='m-4 text-base font-normal leading-none text-stone-500'>{details}</p>
     </li>
    </ol>
   
  )
}

export default WorkItem

