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
                    
                    <h1>Nxtwatch</h1>
                
                    <ul className='ProjectItem'>
  <li>The application mirrors platforms like YouTube, organizing videos meticulously into various genres such as Trending, Sports, Games, Cartoons, and more.</li>
  <li>Users have the capability to save videos that appeal to them, establishing a personalized collection within the 'Saved Videos' category.</li>
  <li>This feature significantly improves user experience, enabling them to curate and revisit content that precisely aligns with their preferences and interests.</li>
</ul>

                    <button>Preview</button>
                </div>
                <div className='ProjectDetails'>
                    <h1>Nxtwatch</h1>
                
                    <ul className='ProjectItem'>
  <li>The application mirrors platforms like YouTube, organizing videos meticulously into various genres such as Trending, Sports, Games, Cartoons, and more.</li>
  <li>Users have the capability to save videos that appeal to them, establishing a personalized collection within the 'Saved Videos' category.</li>
  <li>This feature significantly improves user experience, enabling them to curate and revisit content that precisely aligns with their preferences and interests.</li>
</ul>

<button class="preview-button">
  <a href='https://finelsub.ccbp.tech/' target='_blank' rel="noopener noreferrer">Preview</a>
</button>

                </div>
            
            
                
            </div>
        </div>
    )
}

export default Projects