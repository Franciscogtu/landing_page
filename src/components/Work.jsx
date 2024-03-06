import React from 'react'
import WorkItem from './WorkItem'

const  data = [

    {
    
        Work:'Python Developer',
        Company:'Freelancer',
        Year:'Present - part time',
        Duration:'',
        Details:'Webscrap,collect, extract and process information data (ETL), scripts (Python)'
     },

    {
    
    Work:'Python Developer',
    Company:'Hangjiang Institute of Survey, Planning, Design and Research (Ecuador)(Remote).',
    Year:'2021',
    Duration:'5 months',
    Details:'Study and research for the optimization of the positioning of new electric towers developed in Python.'
    },
    {
     Work:'JavaScript Developer',
    Company:'Moxzones · Freelancer ',
    Year:'2021',
    Duration:'6 months',
    Details:'Moxzones App Junior JavaScript developer (React - Tailwind)'
    },
    {
     Work:'Huawei NOC Assistant',
    Company:'Rhelec ',
    Year:'2018',
    Duration:'5 months',
    Details:'Radio base TK management, incident management, technician follow-up, sector traffic management, traffic graph analysis..'
    }]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 px- 4 pt-16 pb-0 '>
        <h1 className='text-4xl font-bold text-center text-[#001be] pb-20'>Work</h1>

    {data.map((item, index) => (
        <WorkItem key={index} 
        year={item.Year} 
        work={item.Work}
        company={item.Company} 
        duration={item.Duration}
        details= {item.Details}/>
      ))}


      

    </div>
  )
}

export default Work