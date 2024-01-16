import React from "react";
import { AiOutlineHome, AiOutlineMenu ,AiOutlineProject , AiOutlineMail } from "react-icons/ai";
import {BsPerson} from "react-icons/bs"
import {GrProjects} from "react-icons/gr"
import { useState,useRef } from "react";



const Sidenav = () =>{

    const [nav,setNav]=useState(false);
    const sectionRef = useRef(null);
    const handleNav =()=>{
        setNav(!nav);
        console.log("state changed")
    }


return(
    
    <div>
        
    <AiOutlineMenu onClick={handleNav} className='fixed top-4 right-4 z-[99] md:hidden ' />
    {
           nav ?( 
            <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
                <a onClick={() => {
                    setNav(false); // Cierra el menú
                    if (sectionRef.current) {
                      sectionRef.current.scrollIntoView({ behavior: "smooth" }); 
                    }}} href="#main" className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200" >
                    <AiOutlineHome size={20}/>
                    <span className='pl-6'>Home</span>
                </a>
                <a onClick={() => {
                    setNav(false); // Cierra el menú
                    if (sectionRef.current) {
                      sectionRef.current.scrollIntoView({ behavior: "smooth" }); 
                    }}}
                
                href="#work" className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200" >
                    <GrProjects size={20}/>
                    <span className='pl-6'>Work</span>
                </a>
                <a onClick={() => {
                    setNav(false); // Cierra el menú
                    if (sectionRef.current) {
                      sectionRef.current.scrollIntoView({ behavior: "smooth" }); 
                    }}}

                 href="#resume" className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200" >
                    <BsPerson size={20}/>
                    <span className='pl-6'>Studies</span>
                </a>
                <a onClick={() => {
                    setNav(false); // Cierra el menú
                    if (sectionRef.current) {
                      sectionRef.current.scrollIntoView({ behavior: "smooth" }); 
                    }}}
                
                href="#projects" className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200" >
                    <AiOutlineProject size={20}/>
                    <span className='pl-6'>Project</span>
                </a>
                
                <a onClick={() => {
                    setNav(false); // Cierra el menú
                    if (sectionRef.current) {
                      sectionRef.current.scrollIntoView({ behavior: "smooth" }); 
                    }}}
                
                href="#contact" className="w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200" >
                    <AiOutlineMail size={20}/>
                    <span className='pl-6'>Contact</span>
                </a>


            </div>
           
           ):(
            
            ''
            )}
        <div className="md:block hidden fixed top-[25%] z-10">
            <div className="flex flex-col">
                <a href="#main" className=" w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200" >
                    <AiOutlineHome className= 'rounded-full'size={20}/> 
                </a>
                <a href="#work" className=" w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200" >
                    <GrProjects className= 'rounded-full 'size={20}/> 
                </a>
                <a href="#resume" className=" w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200" >
                    <BsPerson className= 'rounded-full 'size={20}/> 
                </a>
                <a href="#projects" className=" w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200" >
                    <AiOutlineProject className= 'rounded-full 'size={20}/> 
                </a>
                
                
                <a href="#contact" className=" w-[75%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200" >
                   
                    <AiOutlineMail className= 'rounded-full'size={20}/> 
                </a>
            </div>
        </div>


    </div>
 
);

};

export default Sidenav;