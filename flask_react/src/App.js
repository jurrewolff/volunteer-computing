import React from 'react'
import './App.css';

// import Navbar from './Components/Navbar'
// import Footer from './Components/Footer'

// import JumpPage from './Actions/jumpPage'
// import AlertMessage from './Components/AlertMessage'
import { useState } from 'react'

import Alert from 'react-bootstrap/Alert'

function App() {

  const [show, setShow] = useState(false);
  // let something = "YEAH!"

  let alert = () => {
    if (show) {
      return (
        <Alert variant="succes">
          <Alert.Heading>TEST</Alert.Heading>
        </Alert>
      )
    }
  }

  return (
    <>
      {/* <h1>Count: {count}!</h1> */}
      <button
        type="button"
        onClick={() => setShow(true)}
      >alert test </button>
      <p> {alert()} </p>
    </>
  )

}


export default App;

// aanroepen van components reminder
// {/* <p>{data.code}</p> */ }


  // return (
  //   <>

  //     < AlertMessage />
  //     {/* <Navbar />

  //     <JumpPage />

  //     <Footer /> */}
  //   </>
  // )