import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const NavBar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
        <NavLink to="/Dashboard" activeStyle>
            Dashboard
          </NavLink>
          <NavLink to="/Projects" activeStyle>
            Browse projects
          </NavLink>
          <NavLink to="/PastProjects" activeStyle>
            History
          </NavLink>
          <NavLink to="/Upload" activeStyle>
            New project
          </NavLink>
          <NavLink to="/Results" activeStyle>
            Results
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default NavBar;