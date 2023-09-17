import AboutImg from '../../assets/about-images/about-img.png'
function About() {
  return <div id='about' className="flex flex-col lg:flex-row gap-14 px-6 items-center">
  <article className="flex flex-col gap-8 justify-center items-center text-center lg:text-left flex-1">
  <h2 className='lg:self-start
  '>Why Me?</h2>
    <p>I’m an <span className='text--highlight'>enthusiastic developer</span> with a passion for learning and building easy-to-use web-based solutions. <span className='text--highlight'>I enjoy all things JavaScript</span> and I have a deep interest in sustainable living and music. <span className='text--highlight'>I love coding</span> because I know <span className='text--highlight'>I can build anything</span> I imagine or reverse engineer anything through <span className='text--highlight'>critical thinking and research</span>. I love being able to take control of technology to <span className='text--highlight'>achieve my goals</span> and help anyone who needs it!</p>
    <div className='flex gap-16'>
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
