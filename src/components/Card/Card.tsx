import './Card.scss'
import { useAnimationControls } from "framer-motion";

import CardOverlay from '../CardOverlay/CardOverlay'

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
  modalIsOpen: boolean;
  project:Project;
  selectedCard:string;
  setSelectedCard:React.Dispatch<React.SetStateAction<string>>;
  cardId:number;

}
function Card({modalIsOpen,setModalIsOpen,project,selectedCard,setSelectedCard,cardId}:ModalProps) {

  const controls = useAnimationControls();
  return (
    <div  className=' card w-[30%] min-w-[380px] max-w-[35%] h-96 p-6 relative rounded-3xl'
    

    onMouseEnter={() => controls.start("visible")}
    onMouseLeave={() => controls.start("init")}
>
  <img className='rounded-3xl' src={project.imgURL} alt="" style={{ position:"absolute", left:'0', top:'0',zIndex:'1'}} />
    <CardOverlay cardId={cardId} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} project={project} controls={controls} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
</div>
  )
}

export default Card