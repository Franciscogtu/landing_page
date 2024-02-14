import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {FaGit, FaLinkedin} from 'react-icons/fa'
import { SiTableau } from "react-icons/si";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { IoLogoWhatsapp } from "react-icons/io";

import { MdEmail } from "react-icons/md";
import { ParallaxBanner } from 'react-scroll-parallax';

import i1 from '../assets/mont1.png';
import i2 from '../assets/f2.png'

const Main = () => {
  return (

   
    <div  id='main' >
  
<ParallaxProvider>
  <ParallaxBanner 
        layers={[
          { image: 'https://images.unsplash.com/photo-1542315192-1f61a1792f33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
           speed: -5 ,
           className:'w-full h-auto' },
          {
            speed: -10,
            children: (
              <div className="relative inset-0 flex items-center justify-center">
                <h1 className="text-8xl text-white font-thin">


                </h1>
              </div>
            ),
          },
          { image: i2, speed: -60  , 
            scale: [0.8, 0,'easeInOutQuint'],
            rotateX:[30],
            translateY:[-90,120],
            translateX: [0, 20] , 
            className: 'flex  items-center h-auto w-auto mb-10 hidden sm:block ' , style: { boxShadow: '0px 190px 150px -150px rgba(255, 255, 255, 0.7)' }},//hidden sm:block
        ]}
        className="aspect-[2/1]  h-screen  w-full relative flex  items-center"
      />

  </ParallaxProvider>


         <div className='w-full h-screen absolute top-0 left-0 bg-gray-300/20'>

       <div className='max-w-[700px] m-auto h-screen w-full flex flex-col justify-center lg:items-start items-center '>

       <h1 className='sm:text-5xl text-4xl font-bold text-white '>HI ! I am Francisco</h1>
       <h2 className='flex   sm:text-3xl text-2xl pt-4 font-semibold text-white '>
        Im a&nbsp;
             <TypeAnimation
                 sequence={[
                 // Same substring at the start will only be typed out once, initially
                 'Passionate developer',
                 1000, // wait 1s before replacing "Mice" with "Hamsters"
                 'versatile IT worker',
                 1000,
                 'Tech Enthusiast',
                 1000,
                 'results-driven data analyst.',
                 1000,
                 'Self-motivated',
                 1000,
                 'Firm believer in teamwork.',
                 1000
                 

         
                ]}
                wrapper="span"
                speed={30}
                style={{ fontSize: '1em', paddingLeft: '10 px'}}
                repeat={Infinity}
            />
        </h2>
        <div className='flex justify-between pt-28 max-w-[300px] w-full m-10 text-xl font-bold'>
                <a href="https://www.linkedin.com/in/francisco-guasumba/"target="_blank" className='cursor-pointer'><FaLinkedin className='cursor-pointer' size={40}  style={{ filter: 'invert(1)' }}/></a>
                <a href="https://github.com/Franciscogtu?tab=repositories"target="_blank" className='cursor-pointer'><FaGit  className='cursor-pointer' size={40} style={{ filter: 'invert(1)' }}/></a>
                <a href="https://public.tableau.com/app/profile/francisco.guasumba/vizzes"target="_blank" className='cursor-pointer'><SiTableau className='cursor-pointer' size={40} style={{ filter: 'invert(1)' }} /></a>

        </div>
        <div className='grid grid-rows-2  gap-4 pt-0 max-w-[300px] w-full m-10 text-white'>
                <a href="https://wa.link/1xnpxi"target="_blank" className=' flex cursor-pointer gap-4'  ><IoLogoWhatsapp className='cursor-pointer text-md ' size={20}  />  +34 618 546 186</a>
                <a href="mailto:franciscoguasumba1@gmail.com"target="_blank" className='flex cursor-pointer gap-4'><MdEmail  className='cursor-pointer text-md' size={20} />  franciscoguasumba1@gmail.com</a>
                
                
        </div>  
        </div>
       </div>
    </div>

  )
}
 export default Main

 // <img className='w-full h-screen object-cover object-left scale-x-[-1]'    src='https://images.unsplash.com/photo-1542315192-1f61a1792f33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' alt="" />    
    