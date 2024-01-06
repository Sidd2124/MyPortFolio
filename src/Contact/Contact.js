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
            <div>
            <div>
  <h3>
    <a className="Sidd" href="mailto:tsiddu805@gmail.com" aria-label="Send me an email">Tap to Contact me via Email📧</a>
    <h3>Or</h3>
    <a href="tel:+919347877159" className="Number" aria-label="Call me"> Tap to Contact me via Phone 📞</a>
  </h3>
</div>

</div>

            </div>
            

            </div>
            
        </div>
    )
}

export default Contact