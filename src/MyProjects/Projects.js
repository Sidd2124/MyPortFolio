import {Link} from 'react-router-dom'

import { IoHomeOutline } from "react-icons/io5";

import './Project.css'

import Train from './Train.png'


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
        <h1>Projects</h1>
      </Link>

      </div>
      <h1 className='Projectheadline'>My Projects</h1>
            <div className='ProjectContainer'>
                          <img src={Train} alt="Sidd" className='Train'/>
                
                <div className='ProjectDetails'>
             
                 
                    <img className='AppLogo' src="https://i.ibb.co/L0DRZgt/Screenshot-2024-01-08-175813.png" alt="Logo"/>
                  
                    <ul className='ProjectItem'>
  <li>The application mirrors platforms like YouTube, organizing videos meticulously into various genres such as Trending, Sports, Games, Cartoons, and more.</li>
  <li>Users have the capability to save videos that appeal to them, establishing a personalized collection within the 'Saved Videos' category.</li>
  <li>This feature significantly improves user experience, enabling them to curate and revisit content that precisely aligns with their preferences and interests.</li>
</ul>
<h3>UserName: Sidd and Password: Sidd2124</h3>
                    
<button class="preview-button">
  <a href='https://finelsub.ccbp.tech/' target='_blank' rel="noopener noreferrer">Preview</a>
</button>
                </div>
                <div className='ProjectDetails'>
                    <img src="https://assets.ccbp.in/frontend/react-js/logo-img.png" alt="App Logo" className='AppLogo'/>
                
                    <ul className='ProjectItem'>
                   
        <li>Jobbey is a cutting-edge application designed for job seekers, offering multiple job opportunities from different companies.</li>
        <li>Users can filter jobs based on job types such as Full-Time, Part-Time, and Freelance, as well as by salary package and location.</li>
        
  <li>Technologies used: React JS, JavaScript, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT
Token, Authorization, Authentication.</li>
 </ul>
 <h3>UserName: Sidd and Password: Sidd2124</h3>
 <button class="preview-button">
  <a href='https://jobbyappbysidd.ccbp.tech/Jobs' target='_blank' rel="noopener noreferrer">Preview</a>
</button>
                </div>
                <div className='ProjectDetails'>
                    <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt='Logo' className='AppLogo'/>
                
                    <ul className='ProjectItem'>
        <li>Nxt Trenz is an application designed for shopping, featuring a diverse range of products from multiple brands.</li>
        <li>The application is organized into different pages, including Home, Deals, Prime Deals, and Cart.</li>
        <li>Various categories of products are available, such as Toys, Home Needs, and Dresses for both men and women.</li>
        <li>Users can add products to their cart in multiple quantities, enhancing the shopping experience.</li>
    </ul>
    <h3>UserName: rahul and Password: rahul@2021</h3>
<button class="preview-button">
  <a href='https://siddmarket.ccbp.tech/' target='_blank' rel="noopener noreferrer">Preview</a>
</button>

                </div>

                <div className='ProjectDetails'>
                    <img src="https://i.ibb.co/r0swpMC/R.jpg" alt='Logo' className='AppLogo'/>
                
                    <ul className='ProjectItem'>
        <li><strong>Portfolio Overview:</strong> This is my personal portfolio, a project designed to share information about my education and technical skills.</li>
        <li><strong>Education:</strong> Schooling, Intermediate, Degree</li>
        <li><strong>Technical Skills:</strong> I am proficient in React.js and have trained ata Nxtwave CCBP.</li>
        <li><strong>Location:</strong> Prgathi Nagar, Kukatpally, Hyderabad</li>
        <li><strong>Curriculum Completion:</strong> I completed my education within the expected time.</li>
        <li><strong>Portfolio Purpose:</strong> This project serves as a simple introduction, showcasing my background and technical abilities to potential collaborators and employers.</li>
    </ul>
 
<button class="preview-buttons">
  <a href='https://siddmarket.ccbp.tech/' target='_blank' rel="noopener noreferrer">Currently Your in Project..😉</a>
</button>

                </div>
            
            
                
            </div>
        </div>
    )
}

export default Projects