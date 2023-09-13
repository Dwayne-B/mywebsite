import Logo from "../../assets/logo/logo-lg.png"

import DownloadPDF from "../../assets/nav-elements/download-pdf-lg.png"
import './Nav.scss'
// Change this component to a hamburger the same as my current portfolio
function Nav() {
  return (
<nav  className='  z-[999] flex justify-between items-center px-5 py-6 w-full max-w-[1180px]'>
    <a href="#">
    <picture>
  <source srcSet={Logo} type='image/png' media="(min-width: 650px)" width={175} height={34} />
  <img src={Logo} alt="Dwayne B Logo" width={115} height={34}/>
 
</picture>
    </a>
<ul className='  flex items-center gap-8  '>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
    <li>
      {/* replace undefined with resume. add a plain text and creative version to download */}
   <a href={'#'}> <img  src={DownloadPDF} alt="Download Resume PDF" width={25} height={25}/></a>
 
    </li>
  </ul>
    </nav>
  )
}

export default Nav