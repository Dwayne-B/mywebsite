
import HeroSvg from '../../components/HeroSvg/HeroSvg'
import './Hero.scss'
import {motion,} from "framer-motion"
const HeroAnimation = {
  init:{
    opacity:0
  },
  visible:{
    opacity:1,
    transition:{
      delay:2.75,
      duration:.4
    }
  }, 
  side:{

    width:"45%",
    transition: {
      duration:3,

    }
  },
  sideInit:{
    width:"0px",
    transition: {
      duration:3,
     
    }
  }
}
function Hero() {
  return (
    <motion.div  id='home' className="hero relative h-screen flex flex-col  justify-evenly
   mb-[-40px]
    items-center text-center  lg:gap-32 gap-8 px-6">
     <motion.div variants={HeroAnimation} initial="sideInit" animate="side" className=" h-img hero-overlay">
      
     </motion.div>
     <motion.div  variants={HeroAnimation} initial="sideInit" animate="side"  className="  h-img  ho2">
      
     </motion.div>
  < HeroSvg />
    <motion.a variants={HeroAnimation} initial="init" animate="visible"  href="#contact">
    <motion.button className="hero__button hover:border-purple-300 hover:bg-slate-900 px-10 h-20  rounded-2xl border border-emerald-300 ">
  Let's Collaborate!
</motion.button>
    </motion.a>

    </motion.div>
  )
}

export default Hero