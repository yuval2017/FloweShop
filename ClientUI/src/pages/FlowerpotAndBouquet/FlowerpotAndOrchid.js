
import React from "react";
import { Await, defer, useLoaderData, useSearchParams } from "react-router-dom";
import { getFlowerpotAndBouquet } from "../../api/api";
import { Flowers } from "../../components/Flowers";
import './FlowerpotAndOrchid.css'
import Filter from "../../components/Filter";
import { useSearch } from "../../context/SearchProvider";
export async function loader(){
    const data = getFlowerpotAndBouquet()
    return defer({data: data})
}


export default function FlowerpotAndOrchid(){

const {setSearchParam ,searchParams, clearSearch} = useSearch()
const typeFilter = searchParams.get("type")
const promiseData = useLoaderData()

const elements = [{name: 'Orchids', handleClick:() => setSearchParam('type', 'orchid')},
{name: 'Bouquet', handleClick:() => setSearchParam('type', '1')}]
  return (
    <div className="flowerpotAndBouquet d-flex">
      <Filter elements={elements}/>
      <button onClick={clearSearch}>Clear</button>
      <React.Suspense fallback= {<h1>Loading Page...</h1>}>
        <Await resolve={promiseData.data}>
          { data =>
            {
              const filterData = !typeFilter ? data: data.filter(data => data.type.type === typeFilter)
              return(
                  <Flowers flowersData = {filterData}/>
              );
            }
          }
        </Await>
      </React.Suspense>
      
    </div>
  );
}