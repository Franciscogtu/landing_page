import React from 'react'
import WorkItem from './WorkItem'

const  data = [

    {
    
        Work:'Universidad Complutense de madrid',
        Company:'Madrid-España',
        Year:'2024 (actualmente) ',
        Duration:'',
        Details:'Máster big data, data science & inteligencia artificial'
     },

    {
    
    Work:'Universidad Europea de Madrid',
    Company:'Madrid-España',
    Year:' 2019- 2021',
    Duration:'',
    Details:'Master Oficial MBI- Big Data Analytics '
    },
    {
     Work:'Universidad de las Americas',
    Company:'Quito - Ecuador',
    Year:'2013- 2018',
    Duration:'',
    Details:'ngeniería en Electrónica y Sistemas de Información'
    },
   ]


const Resume = () => {
  return (
    <div id='resume' className='max-w-[1040px] m-auto md:pl-20 px- 4 py-10 '>
    <h1 className='text-4xl font-bold text-center text-[#001be] pb-20'>Studies</h1>

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

export default Resume