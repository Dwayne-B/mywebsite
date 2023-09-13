import Svg from '../../assets/bg-elements/DEV.svg'
import {ReactSVG} from 'react-svg';
import './Hero.scss'
function Hero() {
  return (
    <div id='home' className="hero relative h-screen w-full flex flex-col justify-center items-center text-center gap-8">
       <ReactSVG src={Svg}  beforeInjection={(svg) => {
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
}

export default Hero