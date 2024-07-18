import React, { useState } from 'react';

import { Bars3Icon, BeakerIcon } from '@heroicons/react/24/solid'
export default function Head() {




 const [toggle,setToggle]=useState(false);





  return (
<header className='flex justify-between bg-ter py-2 px-2' >
    <a href='#' className='font-bold text-black-700'>Abisheik</a>



<nav className='hidden md:block'>
    <button className='block md:hidden'><Bars3Icon className='text-white h-5'></Bars3Icon></button>
<ul className='flex text-black text-xl'>

    <li><a href='#' className='hover:text-indigo-800'>Home</a></li>
    <li><a className='hover:text-indigo-800' href='#about'>About</a></li>
    <li><a  className='hover:text-indigo-800' href='#res'>Resume</a></li>
    <li><a className='hover:text-indigo-800' href='#pro'>Project</a></li>
    <li><a className='hover:text-indigo-800' href='#con'>Contact</a></li>
</ul>

</nav>





{ toggle  && <nav className='block md:hidden'>
   
<ul onClick={()=>setToggle(!toggle)} className='flex flex-col text-black  mobile-nav'>

<li><a href='#' className='hover:text-indigo-800'>Home</a></li>
    <li><a className='hover:text-indigo-800' href='#about'>About</a></li>
    <li><a  className='hover:text-indigo-800' href='#res'>Resume</a></li>
    <li><a className='hover:text-indigo-800' href='#pro'>Project</a></li>
    <li><a className='hover:text-indigo-800' href='#con'>Contact</a></li>

</ul>

</nav>}
<button onClick={()=> setToggle(!toggle)} className='block md:hidden'><Bars3Icon className='text-white h-5'></Bars3Icon></button>



</header>
  )
}
