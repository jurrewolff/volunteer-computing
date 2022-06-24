import React from "react";
import { Link } from "react-router-dom"


export default function Topbar() {
  return (
    <header>
    <div>
        <div>
            <div><span>Copyright © Groep G</span></div>
            <div>
                <ul>
                    <li><Link to="/SignUp"><i>Sign Up</i></Link></li>
                    <li><Link to="/Login"><i></i>Log in</Link></li>
                </ul>
            </div>
        </div>
    </div>
</header>
  );
}