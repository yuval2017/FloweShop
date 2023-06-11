import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function Carousel1() {
  const data = [
    {
     image: require('../assets/Flowers/Bouquet_1.jpeg'), 
     caption:"Caption",
     description:"Description Here"
    },
    {
      image:require('../assets/Flowers/Bouquet_2.jpeg'), 
      caption:"Caption",
      description:"Description Here"
     },
     {
      image:require('../assets/Flowers/Bouquet_3.jpeg'), 
      caption:"Caption",
      description:"Description Here"
     } ]

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
         {data.map((slide, i) => {
          return (
            <Carousel.Item interval={5000}>        
          <img
            className="d-block w-100"
            src={slide.image}
            alt="slider image"
          />
          <Carousel.Caption>
            <h3>{slide.caption}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
          )
        })}
        
      </Carousel>
    );
  }

