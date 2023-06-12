import React from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../context/SearchProvider";
export function Flowers({flowersData}){

  const {searchParams} = useSearch()
  const typeFilter = searchParams.get("type")

  function getImagePath(imgUrl){
    return require('../assets/Flowers/' + imgUrl)
  }
  if (flowersData === undefined){
    return <div>Undifined FLowers Data</div>
  }

  return (
    <div  className="flowers-grid">
      { flowersData.map(flower => {
        return(
          <div key = {flower.key} className="flower-container-home">
            <Link to={`/${flower.key}`}
              state={{search: `?${searchParams.toString()}`, type: typeFilter}}
              >
              <div className="flower-image-container">
                <img src={getImagePath(flower.imageUrl)} alt = "Not Found"/>
              </div>
            </Link>
            <div className="flower-grid-details d-flex">
              <div className = 'flower-grid-name-price d-flex flex-column'>
                <div>name: <span>{flower.name}</span></div>
                <div>price: <span></span>{`${flower.price}$`}</div>
              </div>
              <button>Add to cart</button>
            </div>
          </div>);}
        )}
      </div>
  );
}