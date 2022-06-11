import { Link } from "react-router-dom"

export default function Navbar() {
    return <nav>
        <Link to="/" >Home</Link>
        <ul>
            <li><Link to="/login">login</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/signup">Sign up</Link></li>
        </ul>
    </nav>
}