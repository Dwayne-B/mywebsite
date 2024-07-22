import AboutImg from '../../assets/about-images/about-img.png'
function About() {
  return <div id='about' className=" section flex flex-col md:flex-row gap-14  items-center container ">
  <article className="flex flex-col gap-8 justify-center  lg:text-left flex-1 ">
  <h2 className='lg:self-start
  '>
    

    Hi, I’m <span className='text--highlight '>
    Dwayne Front-End Developer</span>


  </h2>
    <p className='px-3 '> I'm an<span className='text--highlight'> independent creative developer </span> I build 
      <span style={{color:'#757171'}}> (and occassionally design) </span>
      products for the web and mobile world!</p>
    <div className='flex md:gap-16 gap-6 '>
 <a href="#projects">
 <button className="about__button hover:border-purple-300 hover:bg-slate-900 w-44 p-3 rounded-2xl border border-emerald-300 ">
Projects
</button>
 </a>
<a href="#contact">
<button className="about__button hover:border-purple-300 hover:bg-slate-900 w-44 p-3 rounded-2xl border border-emerald-300 ">
 Contact
</button>
</a>
    </div>
  </article>
  <picture className=''>
    <source type="image/png"srcSet={AboutImg} />
    <img src={AboutImg} alt="glasses sitting on keyboard with a monitor displaying code"  />
  </picture>
  </div>
}

export default About;
