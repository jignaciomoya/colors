import React, {useState, useRef, useEffect} from "react";


function boxColor ({color, value}) {

  const [classList, setClassList] = useState('');
  const boxRef =useRef(null);

  const boxStyle = {
    backgroundColor: classList.value == `box ${value}` ? color: null,    
    border: `2px solid ${color}`,
    color: color
  
  }
  useEffect (() => {
    setClassList(boxRef.current.classList)
  }, []);
  return (
    <>
      <div 
        ref={boxRef}
        className={`box ${color}`}
        style={boxStyle}>
          {color === value ? <h3 style={{color: 'black'}}>Yes, I´m {value} color</h3> : <h3>I´m not a {value} color</h3>}

      </div>
    </> 
  )
}
export default boxColor;  