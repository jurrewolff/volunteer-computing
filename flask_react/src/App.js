import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';





// TODO: werkt
// import React, { useState, useEffect } from 'react';


function App() {

  const [data, setData] = useState([{}])
  const [pressed, setPressed] = useState(false)


  useEffect(() => {
    if (pressed) {
      fetch("/login")
        .then(res => res.json())
        .then(data => {
          setData(data)
          console.log(data)
        })
    }
  }, [pressed]);

  return (
    <div className="App">
      <button onClick={() => setPressed(true)}> login </button>
      <p>{data.code}</p>
      <p>bh</p>
    </div>
  );
}

// function Login() {
//   useEffect(() => {
//     const requestOptions = {
//       method: 'POST',
//       headers: {
//         'username': 'jantje',
//         "password": "geheim"
//       }
//     };
//     fetch("/login", requestOptions)
//       .then((response) => response.json())
//       .then((result) => {
//         // UPGRADE
//         // if (result.message === "SUCCESS") {
//         //   alert("You are logged in.");
//         // } else {
//         //   console.log("Please check your login information.");
//         // }
//         console.log({ result }) //DELETE
//       })
// .catch((error) => {
//   console.error('Error:', error);
//       });
//   }, [])
// }


// return (
//   <div>
//     <button onClick={handleClick}>Fetch data</button>
//     <div>
//       <h2>{data.code}</h2>
//       <h2>{data.msg}</h2>
//       <br />
//     </div>
//   </div>
// );
// }

export default App;

  // {/* <p>{data.code}</p> */ }