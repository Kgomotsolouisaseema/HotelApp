import React from "react";
import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import building from "../assets/MainImages/Building.jpg";
import chefimage from "../assets/MainImages/chefimage.jpg";
import littleBoyPool from "../assets/MainImages/LittleBoyPool.jpg";
import lounge from "../assets/MainImages/Lounge.jpg";

import "../index.css"


function MainImage() {
  const carImages = [building, chefimage, littleBoyPool, lounge];

  const [activeIndex, setActiveIndex] = useState(0);

  function handleSelect(selectedIndex) {
    setActiveIndex(selectedIndex);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % carImages.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex, carImages.length]);

  return (
    <div className="slider">
    <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
      {carImages.map((image, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={image} alt={"Slide ${index}"}  id={"mainIMG"}/>
          <div className="overlay-text">
            <h4><span>Sivan Hotel</span></h4>
            <p>Hotel and Resorts </p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
}

export default MainImage;
