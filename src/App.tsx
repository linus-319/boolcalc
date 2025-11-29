import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Syntax from './pages/Syntax'
import About from './pages/About'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-container">       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/syntax" element={<Syntax />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App