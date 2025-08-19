import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Boutton from './components/atoms/Boutton'
import Footer from './components/molecules/Footer'

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Boutton />} />
        <Route path="/footer" element={<Footer />} />
      
      </Routes>
       </Router>

    </div>
  )
}

export default App