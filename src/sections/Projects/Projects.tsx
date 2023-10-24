import Card from '../../components/Card/Card'
import'./Projects.scss'
import { useEffect,useState } from 'react';
// import '../../jsonData/ProjectData.json';
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

}
function Projects({modalIsOpen,setModalIsOpen}:ModalProps) {
    const [projects,setProjects] = useState([]);
    // create filter state whihc will be an array of projects filtered by tagName
	const [filteredProjects, setFilteredProjects] =
  useState([]);
  // const selectedCard 
  const [selectedCard,setSelectedCard] = useState('');
  //create state to track Filter change
	const [tag, setTag] = useState('All');
    useEffect( ()=>{
      console.log(projects.length )
     if(projects.length === 0){
      console.log('Running..')
      const url = './jsonData/ProjectData.json';

      const getJSON = async ()=>{
       await fetch(url).then(data=>{
        return data.json();
       }).then((data)=>{
      
            setFilteredProjects(data.projects)
        setProjects(data.projects);
        })
      }
      getJSON();



     }

      if (tag === 'All') {
        console.log(tag);
        setFilteredProjects(projects);
      } else if (tag === 'Vanilla') {
        console.log(tag);
        const VanillaProjects = projects.filter(
          (project:Project) => {
            return project.tag === 'vanilla';
          },
        );
        setFilteredProjects(VanillaProjects);
      } else if (tag === 'Fullstack') {
        const fullStackProjects = projects.filter(
          (project:Project) => {
            return project.tag === 'fullstack';
          },
        );
        setFilteredProjects(fullStackProjects);
      } else if (tag === 'React') {
        const reactProjects = projects.filter(
          (project:Project) => {
            return project.tag === 'react';
          },
        );
        setFilteredProjects(reactProjects);
      } else if (tag === 'Vue') {
        const vueProjects = projects.filter(
          (project:Project) => {
            return project.tag === 'vue';
          },
        );
        setFilteredProjects(vueProjects);
      }
    },[projects, tag]);

  return (
    <div id='projects' className='section px-6 my-24'>
        <h2>Projects</h2>
        <span>
            <ul className='projects__filter-list flex gap-3'>
                <li className={`tag ${tag==='All'?'tag-selected':''}`} onClick={(e: React.MouseEvent<HTMLLIElement>) => {
					
							setTag(e.currentTarget.textContent|| 'All');
						}}><small>All</small></li>
                <li className={`tag ${tag==='Vanilla'?'tag-selected':''}`} onClick={(e: React.MouseEvent<HTMLLIElement>) => {
							
							setTag(e.currentTarget.textContent|| 'All');
						}}><small>Vanilla</small></li>
                <li className={`tag ${tag==='React'?'tag-selected':''}`} onClick={(e: React.MouseEvent<HTMLLIElement>) => {
					
							setTag(e.currentTarget.textContent|| 'All');
						}}><small>React</small></li>
                <li className={`tag ${tag==='Vue'?'tag-selected':''}`} onClick={(e: React.MouseEvent<HTMLLIElement>) => {
							setTag(e.currentTarget.textContent|| 'All');
						}}><small>Vue</small></li>

            </ul>
        </span>
        <div className='flex flex-wrap justify-center gap-24 mt-8'>
    {filteredProjects.map((project, i )=>{


return(<Card key={i} selectedCard={selectedCard} setSelectedCard={setSelectedCard} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} project={project} cardId={i}/>)

    })}
        </div>
    </div>
  )
}

export default Projects