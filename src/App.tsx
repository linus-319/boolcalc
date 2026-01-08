import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Syntax from './pages/Syntax'
import Examples from './pages/Examples'
import About from './pages/About'

function App() {
  return (
    <div className='app-background'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/valid-expression-examples" element={<Examples />} />
          <Route path="/syntax" element={<Syntax />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App