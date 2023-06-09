import React, { useState } from "react"
export default function Filter({elements}){
  const [selectedElement, setSelectedElement] = useState(null);
  function handleClick(el){
    function func(){
      setSelectedElement(el.name)
      el.handleClick()
    } 
    return func
  }
  return(
    <ul className="filter d-flex">
          {elements.map((el) => (
            <li className = {selectedElement === el.name?"selected":""}
              onClick={handleClick(el)} 
              key={el.name}>
                {el.name}
              </li>
          ))}
    </ul>
  );
  
}