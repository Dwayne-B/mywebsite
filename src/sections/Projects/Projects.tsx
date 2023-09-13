
function Projects() {
    const Projects = [1,2,3,4,5,6];
  return (
    <div className='px-6 my-24'>
        <h2>Projects</h2>
        <span>
            <ul className='projects__filter-list flex gap-3'>
                <li><small>All</small></li>
                <li><small>Front-end</small></li>
                <li><small>Full-Stack</small></li>
            </ul>
        </span>
        <div className='flex flex-wrap justify-center gap-5 mt-8'>
    {Projects.map((project, i )=>{


return(<div key={i} className='w-[30%] min-w-[380px] max-w-[35%] h-96 bg-cyan-500'>
    {"project " + project}
</div>)

    })}
        </div>
    </div>
  )
}

export default Projects