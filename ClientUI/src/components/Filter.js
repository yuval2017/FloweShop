import React, { useState } from "react"
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function Filter({elements}){
  const [selectedElement, setSelectedElement] = useState(null);
  function handleClick(el){
    function func(e){
      setSelectedElement(e.target.value)
      el.handleClick()
    } 
    return func
  }
  return(
    <div className="filter d-flex">
      {
        <ButtonGroup>
        {elements.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={'outline-info'}
            name="radio"
            value={radio.name}
            checked={selectedElement === radio.name}
            onChange={handleClick(radio)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      }
      
    </div>
  );
  
}