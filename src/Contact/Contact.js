

import './Contact.css'
import CartoonLogo from './CarttonLogo.png'
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import Dail from '../Assets/Dailer.png'
import Insta from '../Assets/Insta.png'
import WhatsApp from '../Assets/whatsapp.png'
import { useState } from 'react';

const Contact = () => {
  const [changeLanguage,setchangeLanguage]=useState(true)
  const UpdateLanguage=()=>{
    setchangeLanguage(!changeLanguage)
  }
  return (
    <div className="ContactTop">
      <div className='ProfileDetails'>
        <Link to="/">
          <IoHomeOutline className='HomeIcon' />
        </Link>


        <Link to="/Contact" className='Details'>
          <h1>Details</h1>
        </Link>
        <Link to="/Education" className='Details '>
          <h1 >Education</h1>
        </Link>

        <Link to="/Gallery" className='Details'>
          <h1>Gallery</h1>
        </Link>

      </div>
      <div className="First">
        <div>
          <img src={CartoonLogo} alt="Sidd" className="Cartoon" />
        </div>
        <div>
          <div className="SocialMedia">
            <a href="tel:+919347877159" aria-label="Call me"> <img src={Dail} className="Dialer" alt="Dial" /></a>

            <a href="https://wa.me/9347877159" aria-label="Call me"> <img src={WhatsApp} className="Dialer" alt="Dial" /></a>

            <a href='https://www.instagram.com/mr.sidd07?igsh=MXRtNzl6ZGVvNXBxcw==' aria-label="Call me"> <img src={Insta} className="Dialer" alt="Dial" /></a>
          </div>
          <button className='LangugeChangeButton' onClick={UpdateLanguage}>{changeLanguage?"తెలుగు కోసం":"For English"}</button>
{changeLanguage? <div className="PerSonalInfo">
            <h1>Information</h1>
            <p>Name: Sidd</p>
            <p>Salary: 25000</p>
            <p>Designation: Reactjs Developer </p>
            <p>Company: Agilewits Solution Pvt.Ltd</p>
            <p>Siblings: One Younger Brother</p>
            <p>Own Houses in Allipur & Hyderabad</p>
            <p>5 Acres Of Land Includeing </p>
            <p>{"(1.5 దేవుడి మాన్యం)"}  In Allipur</p>
          </div>:
           <div className="PerSonalInfo">
           <h1>సమాచారం</h1>
<p>పేరు: సిద్ధు</p>
<p>జీతం: 25000</p>
<p>ఉద్యోగం: ReactJS Developer</p>
<p>Company: Agilewits Solutions</p>
<p>అన్నదాములు&అక్కాచెల్లెలు:   ఒక్క తమ్ముడు</p>
<p>అల్లిపుర్ మరియు హైదరాబాద్‌లో సొంత ఇల్లు ఉంది</p>
<p>అల్లిపుర్‌లో 5 ఎకరాల భూమి ఉంది</p>
<p>{"(1.5 ఎకరాల దేవుడి మాన్యం)"}  కలిపి</p>

         </div>}
         
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