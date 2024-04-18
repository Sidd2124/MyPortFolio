import React from 'react';
import { Chrono } from 'react-chrono';

import {Link }  from 'react-router-dom'


import { IoHomeOutline } from "react-icons/io5";

import './Education.css';

const Education = () => {
  const items = [
    
    {
      title: 'Schooling',
      cardTitle: 'Chaithanya Bharathi High School',
      cardSubtitle: 'Atmakur (A),Wanaparthy Dustrict,Telanagana',
      cardDetailedText: 'I successfully completed my Secondary School Certificate (SSC) in 2016, achieving a commendable Cumulative Grade Point Average (CGPA) of 8.8',
      media: {
        type: "IMAGE",
        source: {
          url: "https://i.ibb.co/Pts2m4k/back-to-school-7385701.png"
        }
      }
      
    },    
    {
      title: 'Inter',
      cardTitle: 'Jalajam Junior College',
      cardSubtitle: 'MahabubNagar, Telanagana',
      cardDetailedText: 'I have accomplished my intermediate studies in Commerce with a notable performance, securing a 55% overall grade',
      media: {
        type: "IMAGE",
        source: {
          url: "https://i.ibb.co/QFLc9Pd/Screenshot-2024-01-08-153205.png"
        }
      }
      
    },    
    {
      title: 'Degree',
      cardTitle: 'B.com (Computers)',
      cardSubtitle: 'Dilshuk Nagar,Hyderabad, Telanagana',
      cardDetailedText: 
      "I have earned my Bachelors degree in B.Com Computers with distinction, attaining a noteworthy Cumulative Grade Point Average (CGPA) of 7.42",
      media: {
        type: "IMAGE",
        source: {
          url: "https://i.ibb.co/GCpQmQq/Screenshot-2024-01-08-153343.png"
        }
      }
      
    },    
    {
      title: 'NxtWave CCBP',
      cardTitle: 'specialized training in ReactJS',
      cardSubtitle: 'Gachibowli,Hyderabad, Telanagana',
      cardDetailedText: 'I have acquired comprehensive skills in ReactJS essential for thriving in the IT industry, and I am certified by the placement team at NxtWave',
      media: {
        type: "IMAGE",
        source: {
          url: "https://i.ibb.co/nCmhFwN/Screenshot-2024-01-08-153548.png"
        }
      }
      
    },  ];

  return (
    <div className='Education'>
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
      <h1 className="section-title">Academic Profile</h1>
      <div className="timeline-container" >
        <Chrono items={items} mode="VERTICAL_ALTERNATING"   slideShow={true} />
      </div>
    </div>
  );
};

export default Education;
