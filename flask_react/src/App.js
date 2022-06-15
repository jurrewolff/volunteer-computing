import React from 'react'
import './App.css';

// Imports voor page
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import { useState, useEffect, useRef } from 'react';



function App() {
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState();

  const previousInputValue = useRef("");

  previousInputValue.current = data;

  useEffect(() => {
    if (clicked) {
      console.log(previousInputValue.current)
      setClicked(false)
    }
  }, [clicked])

  // useEffect(() => {
  //   previousInputValue.current = inputValue;
  // }, [inputValue]);

  return (
    <>
      <Navbar />
      {/* Andere features */}
      <Footer />
    </>
  )
}


export default App;





{/* <>
<input
  type="text"
  // value={previousInputValue}
  onChange={(e) => setData(e.target.value)}
  ref={previousInputValue}
/>
<button onClick={() => setClicked(true)}>save</button>
{/* <h2>Current Value: {inputValue}</h2> */}
{/* <h2>Previous Value: {previousInputValue.current}</h2> */ }
// </> * /}