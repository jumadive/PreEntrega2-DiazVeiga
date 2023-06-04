import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <h1>INSTRUMENTOS MUSICALES</h1>
      <nav>
        <ul>
          <li>GUITARRAS</li>
          <li>BAJOS</li>
          <li>AMPLIFICADORES</li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  )
}

export default NavBar