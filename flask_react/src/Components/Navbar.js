import React from "react"
import { Link } from "react-router-dom"
import JumpPage from '../Actions/jumpPage'
import styled from "styled-components";



// export default function Navbar() {
//     return (
//         <>
//             <nav>
//                 <Link to="/" >Home</Link>
//                 <ul>
//                     <li><Link to="/login">login</Link></li>
//                     <li><Link to="/dashboard">Dashboard</Link></li>
//                     <li><Link to="/signup">Sign up</Link></li>
//                     <li><Link to="/projects">Projects</Link></li>
//                     {/* <li><Link to="/upload">Upload</Link></li> */}
//                     <li><Link to="/pastProjects">Past projects</Link></li>
//                     <li><Link to="/upload">Upload</Link></li>
//                 </ul>
//             </nav>
//             <JumpPage />
//         </>
//     )
// }


/* Make text/icons look good (can be deleted) */

const NavIcon = styled.div`
`;

const StyledNavItem = styled.div`
  height: 70px;
  width: 75px; /* width must be same size as NavBar to center */
  text-align: center; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 0;   /* Puts space between NavItems */
  a {
    font-size: 2.7em;
    color: ${(props) => props.active ? "white" : "#9FFFCB"};
    :hover {
      opacity: 0.7;
      text-decoration: none; /* Gets rid of underlining of icons */
    }
  }
`;

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
      }


    render() {
        const { active } = this.props;
        return (
        <StyledNavItem active={active}>
            <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
                <NavIcon></NavIcon>
            </Link>
        </StyledNavItem>
      );
    }
}





/* This defines the actual bar going down the screen */
const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 125px;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  top: 3.4em;      /* Stay at the top */
  background-color: #222; /* Black */
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 10px;
`;

class SideNav extends React.Component {
    render() {
        return (
            <>
            <nav>
            <StyledSideNav>
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
                    <li><Link to="/results">Results</Link></li>
                </ul>
                </StyledSideNav>
            </nav>
            <JumpPage />
        </>
        )
    }

}

export default class Navbar extends React.Component {
    render() {
        return (
            <SideNav></SideNav>
        )
    }
}










//// Oud van Tessa:

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
