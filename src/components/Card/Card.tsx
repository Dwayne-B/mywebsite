import './Card.scss'
import { useAnimationControls } from "framer-motion";

import CardOverlay from '../CardOverlay/CardOverlay'
function Card({project,i}) {
  const CardAnimation = {
    init:{
      x:0.8
    },
    visible:{
      x:1,
      
    }
  }
  const controls = useAnimationControls();
  return (
    <div key={i} className=' card w-[30%] min-w-[380px] max-w-[35%] h-96 p-6 relative rounded-3xl'
    

    onMouseEnter={() => controls.start("visible")}
    onMouseLeave={() => controls.start("init")}
>
  <img className='rounded-3xl' src={project.imgURL} alt="" style={{ position:"absolute", left:'0', top:'0',zIndex:'1'}} />
    <CardOverlay project={project} controls={controls}/>
</div>
  )
}

export default Card