
import { Link } from 'react-router-dom'

import { IoHomeOutline } from "react-icons/io5";
import { useState } from 'react';

import GalleryItem from '../GalleryItems/GalleryItem'

import './Project.css'

import Pic1 from '../Assets/Sidd1.jpg'
import Pic2 from '../Assets/Sidd2.jpg'
import Pic3 from '../Assets/Sidd3.jpg'
import Pic4 from '../Assets/Sidd4.jpg'
import Pic5 from '../Assets/Sidd5.jpg'
import Pic6 from '../Assets/Sidd6.jpg'
import Pic7 from '../Assets/Sidd7.jpg'
import Pic8 from '../Assets/Sidd8.jpg'
import Pic9 from '../Assets/Sidd9.jpg'
import Pic10 from '../Assets/Sidd10.jpg'
import Pic11 from '../Assets/Sidd11.jpg'
import Pic12 from '../Assets/Sidd12.jpeg'
import Pic13 from '../Assets/Sidd13.JPG'
import Pic14 from '../Assets/Sidd14.JPG'
import Pic15 from '../Assets/Sidd15.JPG'
import Pic16 from '../Assets/Sidd16.JPG'
import Pic17 from '../Assets/Sidd17.jpg'
import Pic18 from '../Assets/Sidd18.jpg'



const Pics = [
  {
    PicName: "Pic1",
    PicInfo: Pic1
  },
  {
    PicName: "Pic2",
    PicInfo: Pic2
  },
  {
    PicName: "Pic3",
    PicInfo: Pic3
  },
  {
    PicName: "Pic4",
    PicInfo: Pic4
  },
  {
    PicName: "Pic5",
    PicInfo: Pic5
  },
  {
    PicName: "Pic6",
    PicInfo: Pic6
  },
  {
    PicName: "Pic7",
    PicInfo: Pic7
  },
  {
    PicName: "Pic8",
    PicInfo: Pic8
  },
  {
    PicName: "Pic9",
    PicInfo: Pic9
  },
  {
    PicName: "Pic10",
    PicInfo: Pic10
  },
  {
    PicName: "Pic11",
    PicInfo: Pic11
  },
  {
    PicName: "Pic12",
    PicInfo: Pic12
  },
  {
    PicName: "Pic13",
    PicInfo: Pic13
  },
  {
    PicName: "Pic14",
    PicInfo: Pic14
  },
  {
    PicName: "Pic15",
    PicInfo: Pic15
  },
  {
    PicName: "Pic16",
    PicInfo: Pic16
  },
  {
    PicName: "Pic17",
    PicInfo: Pic17
  },
  {
    PicName: "Pic18",
    PicInfo: Pic18
  },
]

const Projects = () => {
  const [MainPic,setmainPic]=useState(Pic17)
  const [picInfo,setpicInfo]=useState("Pic17")
  const PicsUpdate=(First,Second)=>{
    setpicInfo(First)
    setmainPic(Second)
  }
  return (
    <div className='MainProject'>
      <div className='ProfileDetails'>
        <Link to="/">
          <IoHomeOutline className='HomeIcon' />
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
      <h1 className='Projectheadline'>Gallery</h1>

      <img className='MainPic' src={MainPic} alt="Sidd"/>
      <div className='PicitemsRow'>
      {Pics.map((each) => <GalleryItem Picdtails={each} UpdatePicName={PicsUpdate} isActive={each.PicName===picInfo}/>)}
      </div>
    </div>
  )
}

export default Projects