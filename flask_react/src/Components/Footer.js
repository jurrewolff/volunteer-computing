import React from "react";
import { Link } from "react-router-dom"


export default function Footer() {
  return (
    <footer>
    <div>
        <div>
            <div><span>Copyright © Groep G</span></div>
            <div>
                <ul>
                    <li><Link to="/dashboard"><i>Link 1</i></Link></li>
                    <li><Link to="/home"><i></i>Link 2</Link></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
  );
}
