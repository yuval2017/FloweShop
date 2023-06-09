
import React from "react";
import { Await, defer, useLoaderData, useSearchParams } from "react-router-dom";
import { getFlowerpotAndBouquet } from "../../Api/api";
import { Flowers } from "../../components/Flowers";
import './FlowerpotAndBouquet.css'
import Filter from "../../components/Filter";
export async function loader(){
    const data = getFlowerpotAndBouquet()
    return defer({data: data})
}


export default function FlowerpotAndBouquet(){

const [searchParams, setSearchParams] = useSearchParams()
const typeFilter = searchParams.get("type")
const promiseData = useLoaderData()

function handleFilter(key, value){
  //clear all filtering
  if(key === 'clear-all'){
      setSearchParams(new URLSearchParams());
    }
    setSearchParams(prevParams => {
      //filter all the keys
      // const filterParams = Array.from(prevParams.entries());
      // const existingFilter = filterParams.find(([paramKey]) => paramKey === key);
      //cear current filter
      if (value == null){
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    })
}

const elements = [{name: 'Orchid', handleClick:() => handleFilter('type', 'orchid')},
{name: 'Socilent', handleClick:() => handleFilter('type', '1')}]
  return (
    <div className="flowerpotAndBouquet d-flex">
      <Filter elements={elements}/>
      <React.Suspense fallback= {<h1>Loading Page...</h1>}>
        <Await resolve={promiseData.data}>
          { data =>
            {
              const filterData = !typeFilter ? data: data.filter(data => data.type.type === typeFilter)
              return <Flowers flowersData = {filterData}/>
            }
            
          }
        </Await>
      </React.Suspense>
      
    </div>
  );
}