// import React, { Component } from 'react';
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';

// import { Home } from "./Home";
// // import { About } from "./About";
// // import { Contact } from "./Contact";
// // import { NoMatch } from "./NoMatch";

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <Router>
//           <Routes>
//             <Route path='/Home' element={<Home />} />
//           </Routes>
//         </Router>
//       </React.Fragment>
//     );
//   }
// }

// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// import { Home } from './Home'


// function App() {
//   return (

//     <BrowserRouter>
//       <main className="py-1">
//         <Routes>
//           <Route path="/" element={<Home />} />
//         </Routes>

//       </main>
//     </BrowserRouter>
//   );
// }



// function App() {
//   return (
//     <div>
//       <h1>Bookkeeper</h1>
//       <nav
//         style={{
//           borderBottom: "solid 1px",
//           paddingBottom: "1rem",
//         }}
//       >
//         <Link to="/invoices">Invoices</Link> |{" "}
//         <Link to="/expenses">Expenses</Link>
//       </nav>
//     </div>
//   );
// }


// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import Button from 'react-bootstrap/Button';
// // import { MDBBtn } from 'mdb-react-ui-kit';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';



// const App = () => {
//   return (
//     <div style={{ margin: "30px" }}>
//       <p>
//         <button className="btn btn-primary">Button Primary</button>
//       </p>
//       <p>
//         <button className="btn btn-secondary">Button Secondary</button>
//       </p>
//       <p>
//         <i class="bi bi-alarm-fill text-warning" style={{ fontSize: 50 }}></i>
//       </p>
//       <p>
//         <i class="bi bi-bar-chart text-info" style={{ fontSize: 40 }}></i>
//       </p>
//     </div>
//   );
// };

// export default App;


// import './App.css';
// import Button from 'react-bootstrap/Button';
// // import { MDBBtn } from 'mdb-react-ui-kit';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// // import { Link } from "react-router-dom";


// class App extends Component {
//   render() {
//     return (
//       <div style={{ margin: "30px" }}>
//         <p>
//           <button className="btn btn-primary">Button Primary</button>
//         </p>
//         <p>
//           <button className="btn btn-secondary">Button Secondary</button>
//         </p>
//         <p>
//           <i class="bi bi-alarm-fill text-warning" style={{ fontSize: 50 }}></i>
//         </p>
//         <p>
//           <i class="bi bi-bar-chart text-info" style={{ fontSize: 40 }}></i>
//         </p>
//       </div>
//     );
//   };
// }



// export default App;



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>x
//       </header>
//     </div>
//   );
// }

// import './App.css';
// import React from 'react';
// // import Button from 'react-bootstrap/Button';
// // import { MDBBtn } from 'mdb-react-ui-kit';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';



const App = () => {
  return (
    <div style={{ margin: "30px" }}>
      <p>
        <button onClick={function () { console.log('click'); }} className="btn btn-primary">Button Primary</button>
      </p>
      <p>
        <button className="btn btn-secondary">Button Secondary</button>
      </p>
      <p>
        <i class="bi bi-alarm-fill text-warning" style={{ fontSize: 50 }}></i>
      </p>
      <p>
        <i class="bi bi-bar-chart text-info" style={{ fontSize: 40 }}></i>
      </p>
    </div>
  );
};

// export default App;

import { useState } from 'react'
import axios from "axios";
import logo from './logo.svg';
import './App.css';

function App() {

  // new line start
  const [profileData, setProfileData] = useState(null)

  function getData() {
    axios({
      method: "GET",
      url: "/profile",
    })
      .then((response) => {
        const res = response.data
        setProfileData(({
          profile_name: res.name,
          about_me: res.about
        }))
      }).catch((error) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
      })
  }
  //end of new line

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* new line start*/}
        <p>To get your profile details: </p><button onClick={getData}>Click me</button>
        {profileData && <div>
          <p>Profile name: {profileData.profile_name}</p>
          <p>About me: {profileData.about_me}</p>
        </div>
        }
        {/* end of new line */}
      </header>
    </div>
  );
}

export default App;