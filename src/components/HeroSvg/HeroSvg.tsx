import {motion} from 'framer-motion'
import "./HeroSvg.scss"
function HeroSvg() {
    const heroSvg = {
        init: {
            
          pathLength: 0,
  
        },
        visible: {
        
          pathLength: 1,
          transition:{
            duration:5,
           

          },
        
        }
      }
  return (
   <div>
   <motion.svg  className="heroSvg" width="783" height="224" viewBox="0 0 783 224" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path variants={heroSvg}  initial="init"
      animate="visible" d="M1.18201 221V221.5H1.68201H90.887C114.324 221.5 134.856 216.896 152.467 207.671L152.469 207.67C170.283 198.239 184.124 185.239 193.981 168.672C203.839 152.101 208.762 133.022 208.762 111.45C208.762 89.8785 203.839 70.7994 193.981 54.2284C184.124 37.661 170.282 24.7649 152.468 15.5426C134.856 6.10849 114.324 1.39999 90.887 1.39999H1.68201H1.18201V1.89999V221ZM139.789 33.9523L139.797 33.9563C154.116 41.4274 165.209 51.7973 173.089 65.0683C180.966 78.3352 184.913 93.7902 184.913 111.45C184.913 128.9 180.967 144.356 173.088 157.834C165.208 171.104 154.114 181.579 139.794 189.258C125.69 196.725 108.976 200.468 89.635 200.468H25.344V22.432H89.635C108.974 22.432 125.686 26.2787 139.789 33.9523ZM315.236 120.088H428.042H428.542V119.588V99.869V99.369H428.042H315.236V22.432H441.814H442.314V21.932V1.89999V1.39999H441.814H291.574H291.074V1.89999V221V221.5H291.574H446.509H447.009V221V200.968V200.468H446.509H315.236V120.088ZM591.027 221.202L591.159 221.5H591.484H614.333H614.658L614.79 221.202L711.82 2.10246L712.131 1.39999H711.363H687.888H687.563L687.431 1.69744L603.403 191.335L519.952 1.6986L519.82 1.39999H519.494H494.454H493.686L493.997 2.10246L591.027 221.202ZM752.975 217.899L752.98 217.905L752.986 217.911C756.415 221.34 760.506 223.065 765.233 223.065C769.958 223.065 773.949 221.341 777.173 217.906C780.604 214.473 782.322 210.277 782.322 205.35C782.322 200.221 780.608 196.017 777.162 192.784C773.936 189.56 769.948 187.948 765.233 187.948C760.516 187.948 756.429 189.561 752.997 192.778L752.991 192.784L752.986 192.789C749.749 196.026 748.144 200.228 748.144 205.35C748.144 210.27 749.753 214.463 752.975 217.899Z" stroke="#D8E0FF" stroke-opacity="0.25"/>
</motion.svg>

   </div>
  )
}

export default HeroSvg