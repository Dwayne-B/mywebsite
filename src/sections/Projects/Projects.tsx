import Card from '../../components/Card/Card'
import { useEffect,useState } from 'react';
// import '../../jsonData/ProjectData.json';
function Projects() {
    const [projects,setProjects] = useState([]);
    useEffect( ()=>{
        const url = './jsonData/ProjectData.json';

      const getJSON = async ()=>{
       await fetch(url).then(data=>{
        return data.json();
       }).then((data)=>{
            console.log(data.projects);
        setProjects(data.projects);
        })
      }
      getJSON();
    },[])
  return (
    <div id='projects' className='section px-6 my-24'>
        <h2>Projects</h2>
        <span>
            <ul className='projects__filter-list flex gap-3'>
                <li><small>All</small></li>
                <li><small>Front-end</small></li>
                <li><small>Full-Stack</small></li>
            </ul>
        </span>
        <div className='flex flex-wrap justify-center gap-5 mt-8'>
    {projects.map((project, i )=>{


return(<Card project={project} key={i}/>)

    })}
        </div>
    </div>
  )
}

export default Projects