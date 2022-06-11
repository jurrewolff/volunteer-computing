import { Link } from "react-router-dom"

export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-title">Site name</Link>
        <ul>
            <li><Link to="/login">login</Link></li>
            <li><Link to="/nopage">Nopage</Link></li>
        </ul>
    </nav>
}