import Email from "../Email/Email"

import './Contact.css'


import CartoonLogo from './CarttonLogo.png'
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import Dail from '../Assets/Dailer.png'
import  Insta from '../Assets/Insta.png'
import WhatsApp from '../Assets/whatsapp.png'

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
        <h1>Gallery</h1>
      </Link>

      </div>
            <div className="First">
            <div>
                <img src={CartoonLogo} alt="Sidd" className="Cartoon"/>
            </div>
            <div>
              <div  className="SocialMedia">
            <a href="tel:+919347877159"  aria-label="Call me"> <img src={Dail} className="Dialer" alt="Dial"/></a>
            
            <a href="https://wa.me/9347877159"  aria-label="Call me"> <img src={WhatsApp} className="Dialer" alt="Dial"/></a>
            
            <a href='https://www.instagram.com/mr.sidd07?igsh=MXRtNzl6ZGVvNXBxcw=='   aria-label="Call me"> <img src={Insta} className="Dialer" alt="Dial"/></a>
            </div>
 
              <Email/>
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