import { Link } from "react-router-dom"
import JumpPage from '../Actions/jumpPage'


export default function Navbar() {
    return (
        <>
            <nav>
                <Link to="/" >Home</Link>
                <ul>
                    <li><Link to="/login">login</Link></li>
                    <li><Link to="/logout">logout</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/signup">Sign up</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    {/* <li><Link to="/upload">Upload</Link></li> */}
                    <li><Link to="/pastProjects">Past projects</Link></li>
                    <li><Link to="/upload">Upload</Link></li>
                </ul>
            </nav>
            <JumpPage />
        </>
    )
}

// import React from "react";
// import { Nav, NavLink, NavMenu } 
//     from "./NavbarElements";
  
// const Navbar = () => {
//   return (
//     <>
//       <Nav>
//         <NavMenu>
//         <NavLink to="/Dashboard" activeStyle>
//             Dashboard
//           </NavLink>
//           <NavLink to="/Projects" activeStyle>
//             Browse projects
//           </NavLink>
//           <NavLink to="/PastProjects" activeStyle>
//             History
//           </NavLink>
//           <NavLink to="/Upload" activeStyle>
//             New project
//           </NavLink>
//           <NavLink to="/Results" activeStyle>
//             Results
//           </NavLink>
//         </NavMenu>
//       </Nav>
//     </>
//   );
// };
  
// export default Navbar;

