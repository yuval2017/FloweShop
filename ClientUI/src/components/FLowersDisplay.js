

import React from "react";
import { Await } from "react-router-dom";
import { Flowers } from "./Flowers";
import Filter from "./Filter";
import { useSearch } from "../context/SearchProvider";
import { firstCharToUpperrcase } from "../utils/StringUtils";
import Button from 'react-bootstrap/Button';


export default function FlowersDisplay({promiseData, types, filterBy}){
  const {searchParams, setSearchParam, clearSearch} = useSearch()
  const typeFilter = searchParams.get(filterBy)

  const elements =  Object.values(types).map((value) => {
    return {name: firstCharToUpperrcase(value), handleClick:() => setSearchParam(filterBy, value.toLowerCase())}
  });


  return(
    <div className="flowerpotAndBouquet d-flex gap-4">
    <Filter elements={[...elements, {name: "Show all",  handleClick: clearSearch}]}/>
    <React.Suspense fallback= {<h1>Loading Page...</h1>}>
      <Await resolve={promiseData}>
        { data =>
          {
            const filterData = !typeFilter ? data: data.filter(data => data.type === typeFilter)
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