
import './App.scss'
import Nav from './components/Nav/Nav'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Projects from './sections/Projects/Projects'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'
function App() {

  return (
   <div className='text-white container'>
    <Nav/>
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
   </div>
  )
}

export default App
