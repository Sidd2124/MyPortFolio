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
      
      <Link to="/Projects" className='Details'>
        <h1>Projects</h1>
      </Link>

      </div>
            <div className="First">
            <div>
                <img src={CartoonLogo} alt="Sidd" className="Cartoon"/>
            </div>
            <div>
            <a href="tel:+919347877159" className="Number" aria-label="Call me"> Tap me  to Contact  via Phone 📞</a>
 
              <Email/>
              <a className="Sidd" href="mailto:tsiddu805@gmail.com" aria-label="Send me an email">Tap me  to Contact  via Email📧</a>
            <div>
            <div>
  <h3>
   
    
     </h3>
</div>

</div>

            </div>
            

            </div>
            
        </div>
    )
}

export default Contact