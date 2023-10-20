import'./CardOverlay.scss'
import {motion,AnimationControls } from "framer-motion"
interface Project {
  tag: string;
  title: string;
  description: {
    short: string;
    long: {
      why: string;
      BuiltWith: string[];
    };
  };
  demoURL: string;
  githubURL: string;
  imgURL: string;
}
interface CardOverlayProps {
  project: Project;
  controls: AnimationControls; // Define controls as a prop
}
function CardOverlay({project,controls}:CardOverlayProps) {
    const overlayAnimation = {
        init:{
          opacity:0,
          y:100
        },
        visible:{
          opacity:1,
          y:0
          
        }
      }
      const ContentAnimation = {
        init:{
          scale:0,
   
        },
        visible:{
          scale:1,
        
          transition:{
            delay:.4,
            type: "spring",
            stiffness: 260,
            damping: 20
          }
        }
      }
  
  return (
    <motion.div variants={overlayAnimation}  animate={controls} initial={"init"}className=' rounded-xl overlay p-5 flex flex-col justify-around items-center'>
        <motion.h3 variants={ContentAnimation} initial={"init"}
  animate={controls}
   className="text-4xl font-semibold  text-center">{project.title}</motion.h3>
        <motion.p className='text-center' variants={ContentAnimation} initial={"init"}
  animate={controls}
 >{project.description.short}</motion.p>
        <motion.span variants={ContentAnimation} initial={"init"}
  animate={controls}className='flex gap-4  w-full'>
            <a href={project.demoURL}className='about__button hover:border-purple-300 hover:bg-slate-900 w-44 p-3 rounded-2xl border border-emerald-300 text-center'>Demo</a><a className='about__button hover:border-purple-300 hover:bg-slate-900 w-44 p-3 rounded-2xl border border-emerald-300 text-center'>Learn More</a>
        </motion.span>
    </motion.div>
  )
}

export default CardOverlay