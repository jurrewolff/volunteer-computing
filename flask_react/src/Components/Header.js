import React from "react";
import { Link } from "react-router-dom"


export default function Header() {
  return (
    <header>
    <div>
        <div>
            <div><span>Logo!!!!</span></div>
            <div>
                <ul>
                    <li><Link to="/Account"><i>Account</i></Link></li>
                    <li><Link to="/LogOut"><i></i>Log out</Link></li>
                </ul>
            </div>
        </div>
    </div>
</header>
  );
}