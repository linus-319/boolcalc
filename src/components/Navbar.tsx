import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem',
      background: '#0f0f0f',
      borderBottom: '1px solid #ddd'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
        <Link to="/">
          BoolCalc
        </Link>
      </div>
      <ul style={{
        display: 'flex',
        gap: '1.5rem',
        listStyle: 'none',
        margin: 0,
        padding: 0
      }}>
        <li>
          <Link to='/syntax' style={{ textDecoration: 'none', color: '#777' }}>
            Syntax Rules
          </Link>
        </li>
      </ul>
    </nav>
  )
}