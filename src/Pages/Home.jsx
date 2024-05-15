import React from 'react'
import "./Home.css"
import Rotator from "../Assets/rot.png"
import MyCarousel from "../Components/Carousel"
const Home = () => {
  return (
    <div className='home'>
        <div className="name">
            <img src={Rotator} alt=""  className='rotator'/>
            <h1 className='nameh1'>School Of Informatics</h1>
        </div>
        <div className="carousel">
<MyCarousel/>
        </div>
    </div>
  )
}

export default Home