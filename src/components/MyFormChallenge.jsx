import { useRef, useState } from "react";
import BoxColor from './BoxColor.jsx';


function MyForm() {
  const inputRef =useRef(null);
  const [value, setValue] =useState('');
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];
  return (
    <>
      <input
        type='text'
        onChange={() => setValue(inputRef.current.value)}
        placeholder="Choose a color"
        ref={inputRef}
        value={value}
      />
      <div className="container">
        {colors.map((color, index) =>{
          return (<BoxColor key={index} color={color} value={value} />)
          })}
      </div>
    </>
  );
}

export default MyForm;