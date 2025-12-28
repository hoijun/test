import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Test from './pages/Test'
import Result from './pages/Result'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
