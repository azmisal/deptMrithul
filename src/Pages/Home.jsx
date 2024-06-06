import React from 'react'
import "./Home.css"
import Symbols from "../Assets/Symbols.svg"
import MyCarousel from "../Components/Carousel"
const Home = () => {
  return (
    <div className='home'>
        <div className="name">
          <img src={Symbols} alt="" className='Symbol'/>


            <div className="welcomeText">
              <h1 className='nameh1'>WELCOME TO</h1>
            <h1 className='nameh2'>School Of Informatics</h1>
            <h1 className='nameh3'>DIGITAL UNIVERSITY KERALA</h1>
            </div>
        </div>
        <div className="carousel">
<MyCarousel/>
        </div>
    </div>
  )
}

export default Home