

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Boutton from './components/atoms/Boutton'
import Footer from './components/molecules/Footer'
import Header from './components/molecules/Hero'
import CircleBoutton from './components/atoms/CircleBoutton'
import Navbar from './components/molecules/Navbar'
import BandeAnimation from './components/molecules/bande/BandeAnimation'
import Deuxieme from './components/organisms/Deux/Deuxieme'
import Troisieme from './components/organisms/Troisieme'
import Hero from './components/molecules/Hero'
import LandingPage from './Pages/LandingPage'

function App() {
  return (
    <div>
      <Router>
      <Routes>
        {/* <Route path="/" element={<Boutton />} /> */}
        {/* <Route path="/footer" element={<Footer />} />
        <Route path="/header" element={<Header />} />
        <Route path="/circleBoutton" element={<CircleBoutton />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/BandeAnimation" element={<BandeAnimation />} />
        <Route path="/Deuxieme" element={<Deuxieme />} />
        <Route path="/Troisieme" element={<Troisieme />} />
         <Route path="/Hero" element={<Hero />} /> */}
         <Route path="/" element={<LandingPage />} />
         



      </Routes>
       </Router>

    </div>
  )
}

export default App