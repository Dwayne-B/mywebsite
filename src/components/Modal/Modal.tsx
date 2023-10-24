
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Modal.scss"
import { faX } from '@fortawesome/free-solid-svg-icons'
import {motion } from 'framer-motion'
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
interface ModalProps {
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  project:Project;
  setSelectedCard: React.Dispatch<React.SetStateAction<string>>;
  selectedCard: string;
}
function Modal({setModalIsOpen,project,selectedCard}:ModalProps) {
  const modalAnimation ={
    init:{
      scale:0,
      transition:{
        type: "spring"
      }
    },
    show:{
      scale:1
    }
  }
  if (!selectedCard) {
    return null; // Do not render the modal if no project is selected
  }
  return (
    
    <motion.div variants={modalAnimation}
    initial='init' animate='show'  className="modal  max-w-[380px] max-h-screen   absolute mt-10  px-5 py-5 flex justify-between flex-col overflow-y-visible ">
    
    <button className=' self-end mb-5' onClick={()=>{
      setModalIsOpen((prev)=>!prev)
    }}><FontAwesomeIcon className=' w-8 h-8' icon={faX} style={{color: "#7ae7b8",}} /></button>
    <div className="modal-content h-full w-full">
    <div className="modal-heading flex gap-10 items-center">
    <img className='modal-img' src={project.imgURL} alt="" width={100} />
    <h4 className='text-4xl font-semibold'>
      {project.title}
    </h4>
    </div>
    <div className="modal-body flex flex-col gap-7 mt-10 ">
      <div className="modal-body-tech">
        <ul className='flex'>
        {project.description.long.BuiltWith.map((techURL,i)=>{
          return(<li key={i}><img src={techURL} alt={techURL} width={50} height={50}  /></li>) 
        })}</ul></div>
      <p className='text-sm'>{project.description.long.why}</p>
     <div className="btn-container flex gap-5">
     <a href={project.githubURL} className='about__button hover:border-purple-300 hover:bg-slate-900 w-44 p-3 rounded-2xl border border-emerald-300 text-center'>GitHub</a>
      <button  className='about__button hover:border-purple-300 hover:bg-slate-900 w-44 p-3 rounded-2xl border border-emerald-300 text-center'  
       onClick={()=>{
        setModalIsOpen((prev)=>!prev)} }>Close</button>
     </div>

    </div>
    </div>
    </motion.div>
  )
}

export default Modal