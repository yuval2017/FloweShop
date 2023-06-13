import React from "react";
import { getFLowersByCategory } from "../../api/FlaskAPI";
import { defer, useLoaderData } from "react-router";
import FlowersDisplay from "../../components/FLowersDisplay";
import {FLOWERS} from "../../constants/FlowersCategorys"
export async function loader(){
  const data = getFLowersByCategory("blossom")
  return defer({data: data})
}
export default function Flowers(){
  const promiseData = useLoaderData()
  return (
    <FlowersDisplay promiseData={promiseData.data} types={FLOWERS.types} filterBy={"type"}/>
  );
}