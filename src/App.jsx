import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import Packages from './pages/Packages'
import ContactPage from './pages/Contact'
import BusinessStrategyService from './pages/Services/BusinessStrategy'

// Import other pages...

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/insights" element={<Blog/>}/>
        <Route path="/packages" element={<Packages/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/services/business-strategy" element={<BusinessStrategyService/>}/>
      </Routes>
    <Footer/>
    </Router>
  )
}

export default App