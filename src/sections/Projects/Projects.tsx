import Card from '../../components/Card/Card'
import'./Projects.scss'
import { useEffect,useState } from 'react';
// import '../../jsonData/ProjectData.json';
function Projects() {
    const [projects,setProjects] = useState([]);
    // create filter state whihc will be an array of projects filtered by tagName
	const [filteredProjects, setFilteredProjects] =
  useState([]);
  //create state to track Filter change
	const [tag, setTag] = useState('All');
    useEffect( ()=>{
        const url = './jsonData/ProjectData.json';

      const getJSON = async ()=>{
       await fetch(url).then(data=>{
        return data.json();
       }).then((data)=>{
            console.log(data.projects);
            setFilteredProjects(data.projects)
        setProjects(data.projects);
        })
      }
      getJSON();
    },[]);
    //Use Effect hook everytime a new filter is applied.
    useEffect(() => {
      if (tag === 'All') {
        setFilteredProjects(projects);
      } else if (tag === 'Vanilla') {
        const VanillaProjects = projects.filter(
          (project) => {
            return project.tag === 'vanilla';
          },
        );
        setFilteredProjects(VanillaProjects);
      } else if (tag === 'Fullstack') {
        const fullStackProjects = projects.filter(
          (project) => {
            return project.tag === 'fullstack';
          },
        );
        setFilteredProjects(fullStackProjects);
      } else if (tag === 'React') {
        const reactProjects = projects.filter(
          (project) => {
            return project.tag === 'react';
          },
        );
        setFilteredProjects(reactProjects);
      } else if (tag === 'Vue') {
        const vueProjects = projects.filter(
          (project) => {
            return project.tag === 'vue';
          },
        );
        setFilteredProjects(vueProjects);
      }
    }, [tag]);
  return (
    <div id='projects' className='section px-6 my-24'>
        <h2>Projects</h2>
        <span>
            <ul className='projects__filter-list flex gap-3'>
                <li className={`tag ${tag==='All'?'tag-selected':''}`} onClick={(e) => {
							console.log(e.target.innerHTML);
							setTag(e.target.innerHTML);
						}}><small>All</small></li>
                <li className={`tag ${tag==='Vanilla'?'tag-selected':''}`} onClick={(e) => {
							console.log(e.target.innerHTML);
							setTag(e.target.innerHTML);
						}}><small>Vanilla</small></li>
                <li className={`tag ${tag==='React'?'tag-selected':''}`} onClick={(e) => {
							console.log(e.target.innerHTML);
							setTag(e.target.innerHTML);
						}}><small>React</small></li>
                <li className={`tag ${tag==='Vue'?'tag-selected':''}`} onClick={(e) => {
							console.log(e.target.innerHTML);
							setTag(e.target.innerHTML);
						}}><small>Vue</small></li>

            </ul>
        </span>
        <div className='flex flex-wrap justify-center gap-5 mt-8'>
    {filteredProjects.map((project, i )=>{


return(<Card project={project} key={i}/>)

    })}
        </div>
    </div>
  )
}

export default Projects