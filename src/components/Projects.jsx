import React from 'react'
import ProjectItem from './ProjectItem'
import propertyImg from '../assets/property.jpg'
import cryptoimg from '../assets/crypto.jpg'
import netflixImg from '../assets/netflix.jpg'
import twitchImg from '../assets/twitch.jpg'
import Slider from "../components/Slider"

/**<div className='grid sm:grid-cols-2 gap-12'>
<ProjectItem img={cryptoimg} tittle='Crypto App'/>
<ProjectItem img={propertyImg} tittle='Property App'/>
<ProjectItem img={netflixImg} tittle='Netflix App'/>
<ProjectItem img={twitchImg} tittle='Twitch App'/>
</div> */


const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center'>Projects-Repositories</h1>
        <p className='text-center py-8 text-lg'>
        Welcome to the Projects-Repositories section! Here, you can explore a collection of my projects and repositories.
        Feel free to navigate through my work, and don't hesitate to connect with me on LinkedIn to discover more about my experiences and professional background.
        </p>

    <Slider/>
   

    </div>



    
  )
}

export default Projects