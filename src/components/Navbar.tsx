import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='nav-bar'>

      <ul className='nav-list'>
        <li>
          <Link to="/" className='logo'>
            BoolCalc
          </Link>
        </li>
        <li>
          <Link to="/about" className='nav-link'>
            About
          </Link>
        </li>
        <li >
          <Link to='/syntax' className='nav-link'>
            Syntax Rules
          </Link>
        </li>
      </ul>
    </nav>
  )
}