import Logo from "../../assets/logo/logo-lg.png"
import NavSvg from "../NavSvg/NavSvg"
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import './Nav.scss'
import resume from "../../assets/resume/Dwayne_Bynum_Resume.pdf"
import { motion } from 'framer-motion';




function Nav() {
  const [isOpen, setOpen] = useState(false);
	const [color, setColor] = useState("#fff");
  return (
<nav  className=' z-[999] flex justify-between items-center  px-10 py-6 w-full  fixed bg-[#14181d] left-0 '>
{isOpen ? (
				<motion.div className=' 
        absolute right-0 top-0 bg-black h-screen w-80  py-40 flex flex-col items-center gap-5 z-[1] '>
					<ul className='  flex flex-col items-center gap-8  '>
    <li onClick={()=>{
      setOpen((prev)=>!prev)
    }}><a href="#projects">Projects</a></li>
    <li onClick={()=>{
      setOpen((prev)=>!prev)
    }} ><a href="#about">About</a></li>
    <li onClick={()=>{
      setOpen((prev)=>!prev)
    }}><a href="#contact">Contact</a></li>
    <li onClick={()=>{
      setOpen((prev)=>!prev)
    }} className="text-center ">
      {/* replace undefined with resume. add a plain text and creative version to download */} 
   <a href={resume} download > <NavSvg/></a>
 
    </li>
  </ul>
				</motion.div>
			) : null}
    <a href={resume} download>
    <picture>
  <source srcSet={Logo} type='image/png' media="(min-width: 650px)" width={175} height={34} />
  <img src={Logo} alt="Dwayne B Logo" width={115} height={34}/>
 
</picture>
    </a>

  <Hamburger
			
				color={color}
        onToggle={()=>{
          setColor((prev)=>{
            prev='#6fe7b7';
          return prev})
        }}
				toggled={isOpen}
				toggle={setOpen}
			/>
    </nav>
  )
}

export default Nav



