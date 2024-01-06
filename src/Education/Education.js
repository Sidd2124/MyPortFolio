import React from 'react';
import { Chrono } from 'react-chrono';

import './Education.css';

const Education = () => {
  const items = [
    
    {
      title: 'Schooling',
      cardTitle: 'Chaithanya Bharathi High School',
      cardSubtitle: 'Atmakur (A),Wanaparthy Dustrict,Telanagana',
      cardDetailedText: '5th to SSC Passed And Out in the year Of 2016 with 8.8 CGPA',
      media: {
        type: "IMAGE",
        source: {
          url: "https://i.ibb.co/Pts2m4k/back-to-school-7385701.png"
        }
      }
      
    },    
    {
      title: 'Schooling',
      cardTitle: 'Chaithanya Bharathi High School',
      cardSubtitle: 'Atmakur (A),Wanaparthy Dustrict,Telanagana',
      cardDetailedText: '5th to SSC Passed And Out in the year Of 2016 with 8.8 CGPA',
      media: {
        type: "IMAGE",
        source: {
          url: "i.ibb.co/fxd65Gm/Pngtree-school-building-cartoon-school-classroom-5689021.png"
        }
      }
      
    },    
    {
      title: 'Schooling',
      cardTitle: 'Chaithanya Bharathi High School',
      cardSubtitle: 'Atmakur (A),Wanaparthy Dustrict,Telanagana',
      cardDetailedText: '5th to SSC Passed And Out in the year Of 2016 with 8.8 CGPA',
      media: {
        type: "IMAGE",
        source: {
          url: "https://i.ibb.co/hfFNJHN/png-transparent-brown-school-school-cartoon-building-school-building-comics-angle-orange-thumbnail.png"
        }
      }
      
    },    
    {
      title: 'Schooling',
      cardTitle: 'Chaithanya Bharathi High School',
      cardSubtitle: 'Atmakur (A),Wanaparthy Dustrict,Telanagana',
      cardDetailedText: '5th to SSC Passed And Out in the year Of 2016 with 8.8 CGPA',
      media: {
        type: "IMAGE",
        source: {
          url: "i.ibb.co/fxd65Gm/Pngtree-school-building-cartoon-school-classroom-5689021.png"
        }
      }
      
    },  ];

  return (
    <div className='Education'>
      <h1 className="section-title">My Educations</h1>
      <div className="timeline-container" >
        <Chrono items={items} mode="VERTICAL_ALTERNATING"   slideShow={true} />
      </div>
    </div>
  );
};

export default Education;
