import { Await, defer, useLoaderData } from "react-router-dom";
import Carousel  from "../../components/ Carousel";
import React from "react";
import { getHomeFlowers } from "../../Api/api";
import './HomeFlowers.css'
import { Flowers } from "../../components/Flowers";
export async function loader(){
  const data = getHomeFlowers()
  return defer({
    flowers: data,
  });
}
export default function HomeFlowers(){
  const dataPromise = useLoaderData()
  return(<div className="home-page d-flex">
    <Carousel />
    <div className="home-flowers-container">
      <React.Suspense fallback = {<h2>Loading vans...</h2>}>
        <Await resolve={dataPromise.flowers}>
          { flowersData => 
            <Flowers flowersData={flowersData}/>
          }
        </Await>
      </React.Suspense>

    </div>
  </div>);
}