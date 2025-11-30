import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Syntax from './pages/Syntax'
import Examples from './pages/Examples'

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/valid-expression-examples" element={<Examples />} />
          <Route path="/syntax" element={<Syntax />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App