import React from "react";
import { Link } from "react-router-dom";
export function Flowers({flowersData}){
  function getImagePath(imgUrl){
    return require('../assets/Flowers/' + imgUrl)
  }
  return (
    <div  className="flowers-grid">
      { flowersData.map(flower => 
          <div key = {flower.id} className="flower-container-home">
            <Link to={flower.id}>
              <div className="flower-image-container">
                <img src={getImagePath(flower.imageUrl)}/>
              </div>
            </Link>
            <div className="flower-details">
              <div>name</div>
              <div>price</div>
              <button>Add to cart</button>
            </div>
          </div>
        )}
      </div>
  );
}