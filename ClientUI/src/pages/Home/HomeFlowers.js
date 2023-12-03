import { Await, defer, useLoaderData } from "react-router-dom";
import Carousel1  from "../../components/ Carousel";
import React from "react";
import './HomeFlowers.css'
import { Flowers } from "../../components/FlowersDisplay/Flowers";
import { getHomeFlowers } from "../../api/FlaskAPI";
import {queryClient} from "../../utils";
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
export async function loader() {
  return {
    flowers: await queryClient.fetchQuery({
      queryKey: ["Flowers"],
      queryFn: async () => {
        await wait(3000); // Delay for 3 seconds
        const result = getHomeFlowers();
        return result;
      },
      staleTime: 5 * 60 * 1000
    }),
  };
}
export default function HomeFlowers(){
  const dataPromise = useLoaderData()
  return(
    <div 
    className="home-flowers-container d-flex flex-column">
      <div className="carousel-container d-flex">
      <Carousel1/>
      </div>
     
      <React.Suspense fallback = {<h2>Loading vans...</h2>}>
        <Await resolve={dataPromise.flowers}>
          { flowersData => 
            <Flowers flowersData={flowersData}/>
          }
        </Await>
      </React.Suspense>

    </div>
  );
}