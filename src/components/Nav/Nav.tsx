import Logo from "../../assets/logo/logo-lg.png"

import DownloadPDF from "../../assets/nav-elements/download-pdf-lg.png"
import './Nav.scss'
function Nav() {
  return (
<nav  className='border border-red-100 fixed  top-0 z-[999] flex justify-between items-center p-6 w-full max-w-[1180px]'>
    <picture>
  <source srcSet={Logo} type='image/png' media="(min-width: 650px)" width={175} height={34} />
  <img src={Logo} alt="Dwayne B Logo" width={115} height={34}/>
 
</picture>
<ul className='  flex items-center gap-8  '>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
    <li>
    <img src={DownloadPDF} alt="Download Resume PDF" width={25} height={25}/>
 
    </li>
  </ul>
    </nav>
  )
}

export default Nav