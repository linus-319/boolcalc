import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navlist}>
        <li>
          <Link to="/" className={styles.logo}>
            BoolCalc
          </Link>
        </li>
        <li>
          <Link to='/about' className={styles.navlink}>
            About
          </Link>
        </li>
        <li>
          <Link to='/syntax' className={styles.navlink}>
            Syntax Rules
          </Link>
        </li>
        <li>
          <Link to='/valid-expression-examples' className={styles.navlink}>
            Valid Expression Examples
          </Link>
        </li>
      </ul>
    </nav>
  )
}