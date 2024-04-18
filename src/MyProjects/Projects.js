
import {Link} from 'react-router-dom'

import { IoHomeOutline } from "react-icons/io5";
 



import './Project.css'

import Pic1 from '../Assets/Sidd1.jpg'
import Pic2 from '../Assets/Sidd2.jpg'
import Pic3 from '../Assets/Sidd3.jpg'
import Pic4 from '../Assets/Sidd4.jpg'
import Pic5 from '../Assets/Sidd5.jpg'
import Pic6 from '../Assets/Sidd6.jpg'
import Pic7 from '../Assets/Sidd7.jpg'
import Pic8 from '../Assets/Sidd8.jpg'
import Pic9 from '../Assets/Sidd9.jpg'
import Pic10 from '../Assets/Sidd10.jpg'
import Pic11 from '../Assets/Sidd11.jpg'
import Pic12 from '../Assets/Sidd12.jpeg'
import Pic13 from '../Assets/Sidd13.JPG'
import Pic14 from '../Assets/Sidd14.JPG'
import Pic15 from '../Assets/Sidd15.JPG'
import Pic16 from '../Assets/Sidd16.JPG'
import Pic17 from '../Assets/Sidd17.jpg'
import Pic18 from '../Assets/Sidd18.jpg'

const PicsArray=[Pic1, Pic2, Pic3, Pic4, Pic5, Pic6,Pic7, Pic8, Pic9, Pic10, Pic11, Pic12, Pic13, Pic14, Pic15, Pic16, Pic17, Pic18,]


const Projects=()=>{
    return(
        <div className='MainProject'>
             <div className='ProfileDetails'>
          <Link to="/"> 
           <IoHomeOutline className='HomeIcon'/>
          </Link>
 

      <Link to="/Contact" className='Details'>
        <h1>Contact</h1>
      </Link>
      <Link to="/Education" className='Details '>
        <h1 >Education</h1>
      </Link>
     
      <Link to="/Projects" className='Details'>
        <h1>Gallery</h1>
      </Link>

      </div>
      <h1 className='Projectheadline'>Gallery</h1>
            {PicsArray.map((each)=><img src={each} alt="Gallaery Items"/>)}
        </div>
    )
}

export default Projects