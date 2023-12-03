
import React from "react";
import {defer, useLoaderData } from "react-router-dom";

import './FlowerpotAndOrchid.css'
import { getFLowersByCategory } from "../../api/FlaskAPI";
import FlowersDisplay from "../../components/FLowersDisplay";
import { FLOWERPOT_AND_ORCHID } from "../../constants/FlowersCategorys";
export async function loader(){
    const data = getFLowersByCategory("flowerpot")
    return defer({data: data})
}


export default function FlowerpotAndOrchid(){
const promiseData = useLoaderData()
  return (
    <div className="flowerpotAndBouquet d-flex">
      <FlowersDisplay promiseData={promiseData.data} types={FLOWERPOT_AND_ORCHID.types} filterBy ={"type"}/>
    </div>
  );
}