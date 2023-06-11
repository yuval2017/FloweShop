import { Await, Link, defer, useLoaderData, useLocation } from "react-router-dom";
import { getFlower } from "../api/api";
import React from "react";
import './componentsstyle.css'
export async function loader({params}){
  const fetchData = getFlower(params.id)
  return defer({flowerDetail: fetchData})
   
}
export default function FlowerDetail(){
  const promiseData = useLoaderData()
  const location = useLocation()
  const currentPathname = window.location.pathname;
  const pathSegments = currentPathname.split('/');
  const lastSegment = pathSegments.length >=2 &&  pathSegments[pathSegments.length - 2];
  const search = location.state?.search || ""
  const type = location.state?.type || lastSegment


  function getImagePath(imgUrl){
    return require('../assets/Flowers/' + imgUrl)
  }
  return(
  <div>
    <React.Suspense fallback={<div>Loading flower details...</div>}>
      <Link to ={`..${search}`}
        >
        &larr; <span>{`Back to ${type}`}</span>
        </Link>
      <Await resolve={promiseData.flowerDetail}>
        { flowerDetail =>{
          console.log(flowerDetail.description)
          return  (
            <div className="flower-detail-container d-flex">
              <div className="flower-detail-image-container">
                <img src={getImagePath(flowerDetail.imageUrl)} alt="Flower does not found"/>
              </div>
              <div className="flower-data">
               <h2>{flowerDetail.name}</h2>
               <p>{flowerDetail.price}<span>$</span></p>
               <p>{flowerDetail.description}</p>
              </div>   
            </div>
          );
          }
        }  
      </Await>
    
    </React.Suspense>
  </div>
  );
}