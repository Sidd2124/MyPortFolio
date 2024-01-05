import Email from "../Email/Email"

import './Contact.css'

import CartoonLogo from './CarttonLogo.png'
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";

const Contact=()=>{
    return(
        <div className="ContactTop">
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
      <Link to="/Experiance" className='Details'>
        <h1>Experience</h1>
      </Link>
      <Link to="/Projects" className='Details'>
        <h1>Projects</h1>
      </Link>

      </div>
            <div className="First">
            <div>
                <img src={CartoonLogo} alt="Sidd" className="Cartoon"/>
            </div>
            <div><Email/>
            
            <h3><a className="Sidd">Reach me</a> @tsiddu805@gmail.com/
            +91 9347877159</h3></div>
            

            </div>
            
        </div>
    )
}

export default Contact