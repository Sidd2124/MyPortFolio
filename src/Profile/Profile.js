
import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineLinkedin } from 'react-icons/ai'
import { IoHomeOutline } from "react-icons/io5";

import './Profile.css';



import Pic from './Sidd.jpg'


const Profile = () => {
  return (
    <div className='Main'>
        <div className='ProfileDetails'>
          <Link to="/"> 
           <IoHomeOutline className='HomeIcon'/>
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

      
<div className='Layer'>
      <div className="border-container">
        <a href="https://github.com/Sidd2124" target="_blank" className="border-image" rel="noopener noreferrer">
          <FaGithub className='Icons' />
        </a>

        <a href="https://www.instagram.com/mr.sidd07/" target="_blank" className="border-image" rel="noopener noreferrer">
          <FaInstagram className='Icons' />
        </a>

        <a href="https://wa.link/5cajtg" target="_blank" className="border-image" rel="noopener noreferrer">
          <FaWhatsapp className='Icons' />
        </a>

        <a href="https://www.linkedin.com/in/siddhu-t-b73b82243/" target="_blank" className="border-image" rel="noreferrer">
          <AiOutlineLinkedin className='Icons' />
        </a>

        <div className='border-image'>
          <img src={Pic} alt="Sidd" className='Logo'/>
        </div>
      </div>
      <div className='Info'>
<h3>Hi,I'm</h3>
<h1 className='Sidd'>Sidd</h1>
<h3>React js Developer</h3>
<h3>@ Agilewit Solutions Pvt.Ltd</h3>
<p>React JS Developer passionate about building dynamic web applications with clean code and pixel-perfect precision. #ReactJS #DeveloperLife #CodeCrafting</p>

      </div>
      </div>
      
    </div>
  );
};

export default Profile;
