import  abi  from "../assets/me.png";
import { AiOutlineInstagram,AiOutlineLinkedin,AiOutlineYoutube } from "react-icons/ai";

export default function Hero() {

const info={

  img:abi
}


  return (
    <section className='flex flex-col md:flex-row px-5 py-28 bg-primary justify-center'>
<div className="w-1/2 flex flex-col">
<h1 className=" text-white font-bold text-6xl font-abi-font ">R.ABISHEIK
 <br></br>
 
<p className="text-[23px] py-2">I'm a Full Stack Developer and Web Designer</p>
    
</h1>
<div className="flex py-8">
    <a href="#" className="pr-2 hover:text-white"><AiOutlineInstagram size={40}/></a>
    <a href="#" className="pr-2 hover:text-white"><AiOutlineLinkedin  size={40}/></a>
    <a href="#" className="hover:text-white"><AiOutlineYoutube  size={40}/></a>
</div>

</div>





<img src={info.img} className="md:w-1/4 sm:w-2/4 rounded-full mt-[-80px] mb-[-90px]  "></img>




















    </section>
  )
}
