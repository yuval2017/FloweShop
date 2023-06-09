import { Await, defer, useLoaderData } from "react-router-dom";
import { getFlower } from "../Api/api";
import React from "react";

export async function loader({params}){
  const fetchData = getFlower(params.id)
  return defer({flowerDetail: fetchData})
   
}
export default function FlowerDetail(){
  const promiseData = useLoaderData()
  function getImagePath(imgUrl){
    return require('../assets/Flowers/' + imgUrl)
  }
  console.log(promiseData)
  return(
  <div>
    <React.Suspense fallback={<div>Loading flower details...</div>}>
      <Await resolve={promiseData.flowerDetail}>
        { flowerDetail =>{
          return  <img  src={getImagePath(flowerDetail.imageUrl)} alt="Flower does not found" style={{maxWidth: "100%", height: "auto"}}/>
          }
        }
        
      </Await>
    
    </React.Suspense>
  </div>
  );
}