import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <header>
            <Link to={"/"}>
                <h1>INSTRUMENTOS MUSICALES</h1>
            </Link>
            <nav>
                <ul>
                    <li><NavLink to={"/categoria/1"}>GUITARRAS</NavLink></li>
                    <li><NavLink to={"/categoria/2"}>BAJOS</NavLink></li>
                    <li><NavLink to={"/categoria/3"}>AMPLIFICADORES</NavLink></li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar