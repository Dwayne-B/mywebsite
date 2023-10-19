# Todo:
    - move all images to ImgBB a free image hosting service
        - compress and resize images
            - use figma to resize image scale it to the size you need and export.
            - use jpg if image does not need a transparent bg 
            -use tiny png to compress 
            - use script to convert images to webp
    - Change favicon
    - make html semantic
    - add arias where applicable
    -add a skills sections called technology toolbox
    - add Nav animations
    - add projects 
    -create filtering functionality.
 - hook up contact form properly
    


## Questions and learned Things to write about:

    - Content Config for tailwind "tailwind.config.js" 
    - why I use Bem css naming convention and how to.
    - how to center absolute positioning elem
   - how to expose network to develop on mobile 
### why doesnt this work - ReactSvg package and framer motion
<!-- import Svg from '../../assets/bg-elements/DEV.svg'
import {ReactSVG} from 'react-svg';
import './Hero.scss'
import {motion} from 'framer-motion'
function Hero() {
  return (
    <div id='home' className="hero relative h-screen w-full flex flex-col justify-center items-center text-center gap-8">
       <motion.ReactSVG src={Svg}  beforeInjection={(svg) => {
    svg.classList.add('hero__svg')
  }}/>
  <h1>Hi, I’m <span className='text--highlight'>
  Dwayne Front-End Developer</span> based in Orlando Florida. </h1>
  
    <a href="#contact">
    <button className="hero__button hover:border-purple-300 hover:bg-slate-900 w-60 h-20 rounded-2xl border border-emerald-300 ">
  Hire Me!
</button>
    </a>

    </div>
  )
} -->

export default Hero