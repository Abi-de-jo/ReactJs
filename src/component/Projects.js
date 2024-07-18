import React from 'react'
import web from '../assets/web.jpg'
import web2 from '../assets/web2.png'
import web3 from '../assets/web3.jpg'
export default function Projects() {


   const info= { 
      
      pro:[
         {
      image:web,
      desc:'Portfolio website created with  Html,Css,JS,React,Bootstrap,Tailwand',
      link:'https://github.com/Abi-de-jo'
   },
   {
      image:web2,
      desc:'Netflix webpage created by Html,Css,javascript',
      link:'https://github.com/Abi-de-jo'
   },
   {
      image:web3,
      desc:'Authenticated Login Form using html,css,Php,Js',
      link:'https://github.com/Abi-de-jo'
   }]}
  return (
    <section id='pro' className=' flex flex-col p-6 justify-center bg-for'>
          <div className='w-full'>
         
         <div className='flex flex-col px-10  xxl:px-8 '>
         <h1 className='text-4xl  text-red border-black  border-b-2 mb-4 w-[140px] font-bold'>Projects</h1>
<p className='text-red'> these are my best projects</p>
         </div>
         
         
          
          </div>
          <div className='py-8' >
          <div className='flex px-10 gap-5 flex-col md:flex-row justify-center'>
        {info.pro.map((project)=>(
         <a href={project.link}>

          <div className='relative'> 
          <img src={project.image} className='h-[200px]' />
       <div className='absolute left-0 right-0 bottom-0 text-white top-0 bg-primary opacity-0 duration-300 hover:opacity-100'>
          <p className='text-center v py-5'>{project.desc}
<button className='btn flex ml-28  bg-for text-white'><a href={project.link} className=''> Check </a></button>
          </p>
       </div>
       </div>
       </a>


        ))}
        



         
        
          </div>
        
          </div>

    </section>
  
  )
}
