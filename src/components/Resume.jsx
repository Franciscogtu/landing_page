import React from 'react'
import WorkItem from './WorkItem'
import Skills from './Skills';

const  data = [

    {
    
        Work:'Universidad Complutense de madrid',
        Company:'Madrid-España',
        Year:'2024 (currently) ',
        Duration:'',
        Details:'Master in Big Data, Data Science & Artificial Intelligence'
     },

    {
    
    Work:'Universidad Europea de Madrid',
    Company:'Madrid-España',
    Year:' 2019- 2021',
    Duration:'',
    Details:'Official Masters in Business Intelligence - Big Data Analytics'
    },
    {
     Work:'Universidad de las Americas',
    Company:'Quito - Ecuador',
    Year:'2013- 2018',
    Duration:'',
    Details:'Electronics and Information Systems Engineering'
    },
   ]

   const cursos = [
    {
        Institucion: "Universidad Politécnica del Ecuador",
        Curso: "IX International Seminar of Applied Statistics",
        Ubicacion: "Quito, Ecuador",
        Fecha: "25/06/2015"
        },
        {
        Institucion: "Universidad de las Américas/ ESET",
        Curso: "Data Security",
        Ubicacion: "Quito, Ecuador",
        Fecha: "10/07/2015"
        },
        {
        Institucion: "Universidad de las Américas",
        Curso: "Security Trends and the Cost of Cybercrime",
        Ubicacion: "Quito, Ecuador",
        Fecha: "10/02/2016"
        },
        {
        Institucion: "Miriadax - Telefónica",
        Curso: "Web Analytics 4th Edition",
        Ubicacion: "Quito, Ecuador",
        Fecha: "23/04/2019"
        },
        {
        Institucion: "Miriadax - Telefónica",
        Curso: "Growth Hacking (5th Edition)",
        Ubicacion: "Quito, Ecuador",
        Fecha: "23/04/2019"
        }
   
]



const habilidad = 
[
  { habilidad: "Python, Data Analytics", detalle: "Usage of libraries, GeoPandas, Numpy, Seaborn, Sklearn for data analysis and machine learning. Deep learning and computer vision with Keras and OpenCV (Cv2)." },
  { habilidad: "FrontEnd", detalle: "Frontend development with React and responsive design using Tailwind CSS. Creating interfaces with HTML and JavaScript." },
  { habilidad: "C# and C++", detalle: ".NET platform fundamentals. C# and C++ development." },
  { habilidad: "MongoDB and CouchDB", detalle: "Familiarity with NoSQL databases, MongoDB queries, and CouchDB administration." },
  { habilidad: "Spark", detalle: "Fundamentals of Apache Spark." },
  { habilidad: "Tableau", detalle: "Basic report creation and data visualization with Tableau." },
  { habilidad: "Data Visualization", detalle: "General knowledge in data visualization using tools such as PowerBi, Carto, d3, Leaflet." },
  { habilidad: "CCNA", detalle: "Cisco CCNA 1-4 with a focus on switches and routers." },
  { habilidad: "English", detalle: "Level B2 Cambridge Press. Skills in technical and written communication in English." },
];
 
const softSkills =
 [
  { habilidad: "Collaboration and Teamwork", detalle: "Excellent ability to work collaboratively and contribute constructive ideas in group settings. Successful experience in team projects, standing out for effective communication and synergy with teammates."},
  { habilidad: "Problem Solving", detalle: "Persistence and consistency in solving challenges, demonstrating analytical and creative skills to find effective solutions. Proactivity in addressing problems, identifying areas for improvement, and implementing positive changes." },
  { habilidad: "Self-Taught and Proactivity", detalle: "Ability to learn autonomously, showing initiative to acquire new knowledge and skills. Proactivity in seeking opportunities for personal and professional growth." },
  { habilidad: "Responsibility and Honesty", detalle: "Commitment to responsibility in executing assigned tasks, ensuring quality results and meeting deadlines. Integrity and honesty in all interactions, building trust and transparency in the work environment." },
  { habilidad: "Positive Attitude", detalle: "Maintaining a positive attitude in the face of challenges, inspiring others with optimistic energy. Ability to stay calm and resilient in difficult situations." },
  { habilidad: "Creativity and Innovation", detalle: "Creativity to find unique solutions and think outside the conventional in problem-solving. Ability to contribute innovative ideas and contribute to the development of original projects." },
  { habilidad: "Teamwork Ease", detalle: "Ability to adapt easily to group dynamics, fostering a collaborative and harmonious environment. Effective contribution to achieving collective goals, promoting cohesion and teamwork." }
];


const Resume = () => {
  return (
    <>
    <div id='resume' className='max-w-[1040px] m-auto md:pl-20 px- 4 pt-10 pb-0 '>
    <h1 className='text-4xl font-bold text-center text-[#001be] pb-20'>Studies</h1>

{data.map((item, index) => (
    <WorkItem key={index} 
    year={item.Year} 
    work={item.Work}
    company={item.Company} 
    duration={item.Duration}
    details= {item.Details}/>
  ))}

<div  className='max-w-[1040px] m-auto md:pl-20 px-1 pt-5 pb-0  '>
    <h1 className='text-4xl font-bold text-center text-[#001be] pb-10 '>Courses</h1>

{cursos.map((item, index) => (
    <WorkItem key={index} 
    company={item.index} 
    details={item.Curso}
    duration ={item.Ubicacion} 
    year={item.Fecha}
    />
  ))}

</div>

  <div  className='max-w-[1040px] m-auto md:pl-20 px- 4 pt-10 pb-0  '>
      <h1 className='text-4xl font-bold text-center text-[#001be] pb-0 '>Tech Skills</h1>
  </div>
  
  <div>
      <Skills skills={habilidad} />
  </div>
  <div  className='max-w-[1040px] m-auto md:pl-20 px- 4 pt-5 pb-0  '>
      <h1 className='text-4xl font-bold text-center text-[#001be] pb-0 '>Soft Skills</h1>
  </div>

  <div>
      <Skills skills={softSkills} />
  </div>

</div>
 
</>
  )
}

export default Resume



