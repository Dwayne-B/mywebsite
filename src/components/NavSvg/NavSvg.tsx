import "./NavSvg.scss"
import {motion} from "framer-motion"
function NavSvg() {
    const downloadSvg  = {
    
        init:{
        y:0,
      
        },
        moveY:{
            y:10,
        
        }
        
    }
  return (
    <div>
        <motion.svg   width="100" height="100" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.3" d="M100 96.9995L100 32.7773C100 30.5682 98.2091 28.7773 96 28.7773L70 28.7773L30 28.7773L4 28.7773C1.79086 28.7773 -7.8281e-08 30.5682 -1.74846e-07 32.7773L-2.98209e-06 96.9995C-3.07865e-06 99.2087 1.79086 101 4 101L96 101C98.2091 101 100 99.2087 100 96.9995Z" fill="white"/>
    <motion.path variants={downloadSvg} initial="init" animate="moveY" transition={{
        
            duration: 1, 
            repeat:Infinity,
            repeatType: "mirror"
   
    }} 

    
    d="M35 56.5556L46.4645 69.2939C48.4171 71.4635 51.5829 71.4635 53.5355 69.2939L65 56.5556M50 67.6667L50 0.999999" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    </motion.svg>
    </div>
  )
}

export default NavSvg