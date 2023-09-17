
import HeroSvg from '../../components/HeroSvg/HeroSvg'
import './Hero.scss'
import {motion} from "framer-motion"
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
  }
}
function Hero() {
  return (
    <div id='home' className="hero relative h-screen w-full  flex flex-col lg:flex-row  justify-center 

    items-center text-center lg:text-left gap-8 px-6">
     
  <motion.h1 className='md:text-[3.25rem]   ' variants={HeroAnimation} initial="init" animate="visible">Hi, I’m <span className='text--highlight '>
  Dwayne Front-End Developer</span> based in Orlando Florida. </motion.h1>
  < HeroSvg />
    <motion.a variants={HeroAnimation} initial="init" animate="visible"  href="#contact">
    <motion.button className="hero__button hover:border-purple-300 hover:bg-slate-900 w-60 h-20 rounded-2xl border border-emerald-300 ">
  Hire Me!
</motion.button>
    </motion.a>

    </div>
  )
}

export default Hero