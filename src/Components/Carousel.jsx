import photo1 from "../Assets/photo1.jpg"
import photo2 from "../Assets/photo2.jpg"
import photo3 from "../Assets/photo3.jpg"
import photo4 from "../Assets/photo4.jpg"
import "./Carousel.css"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapCarousel from 'react-bootstrap/Carousel';


const MyCarousel = ()=>{

    const images = [photo1,photo2,photo3,photo4];

    return(
        <div className="carousel">
            <BootstrapCarousel>
                {
                    images.map((image,index) =>(
                        <BootstrapCarousel.Item interval={2000} key={index}>
                            <div className="hav">
                                <img src={image} alt="" className="carouselImg"/>
                            </div>
                        </BootstrapCarousel.Item>
                    )
                
                )
                }
            </BootstrapCarousel>

        </div>
    )
}

export default MyCarousel;