import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuToggle = () => {
    if (isOpen) {
      setIsOpen(false);
    }
    else {
      setIsOpen(true);
    }
  }

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navlist}>
        <li className={styles.bar}>
          <Link to="/" className={styles.logo}>BoolCalc</Link>
          <button onClick={menuToggle} className={styles['menu-button']} aria-label="Toggle menu">
            <span />
            <span />
            <span />
          </button>
        </li>
        <li className={`${styles['nav-item']} ${isOpen ? styles.open : ''}`}>
          <Link to='/about' className={styles.navlink}>About</Link>
        </li>
        <li className={`${styles['nav-item']} ${isOpen ? styles.open : ''}`}>
          <Link to='/syntax' className={styles.navlink}>Syntax</Link>
        </li>
        <li className={`${styles['nav-item']} ${isOpen ? styles.open : ''}`}>
          <Link to='/valid-expression-examples' className={styles.navlink}>Examples</Link>
        </li>
      </ul>
    </nav>
  )
}