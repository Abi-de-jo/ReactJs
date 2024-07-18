import React from 'react'
import  me  from "../assets/about.png";

export default function About() {

const info={

  

h1:'Web Development:',
d1:' Proficient in: HTML, CSS, JavaScript, Bootstrap, SQL Moderate proficiency in: ReactJS Beginner in: PHP',

h2:'Professional Experience:',
d2:'College Management: Developed and managed the official website of my college. Event Participation: Created a VR game for the Chennai Anna University Kurukshetra event.',

h3:  'Content Creation:' ,
d3:'YouTube: Over 1 year of experience regularly posting educational and informative videos on my YouTube channel.',

h4:'Academic Projects:',
d4:'Leveraged my skills to contribute effectively to various academic projects and extracurricular activities. '
}

  return (
   <section className='flex flex-col md:flex-row bg-ter' id='about'>

<div className='md:w-1/2'>
    <img src={me} className='w-[400px]' />
</div>

<div className='md:w-1/2 flex px-3 justify-center py-4'>
<div className='flex flex-col justify-center text-white'>

<h1 className='text-4xl text-white border-b-4 border-primary mb-4 w-[170px] font-bold'>About Me</h1>
<p className='text-white'>{info.h1} {info.d1}</p>
<p className=' mt-4'>{info.h2} {info.d2}</p>
<p className=' mt-4'>{info.h3} {info.d3}</p>
<p className=' mt-4'>{info.h4} {info.d4}</p>
</div>
     
</div>


    
   </section>
  )
}
