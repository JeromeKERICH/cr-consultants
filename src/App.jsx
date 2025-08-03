import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'

import ContactPage from './pages/Contact'
import BusinessStrategyService from './pages/Services/BusinessStrategy'
import CrossBorder from './pages/Services/CrossBorder'
import InfrastructureService from './pages/Services/Infrastructure'
import ImmigrationService from './pages/Services/Immigration'
import FamilyOfficeService from './pages/Services/FamilyOffice'
import LeadershipDevelopmentService from './pages/Services/Leadership'
import LegalConsultancyService from './pages/Services/Legal'
import Packages from './pages/Packages'





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
        
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/services/business-strategy" element={<BusinessStrategyService/>}/>
        <Route path="/services/cross-border" element={<CrossBorder/>}/>
        <Route path="/services/infrastructure" element={<InfrastructureService />}/>
        <Route path="/services/immigration" element={<ImmigrationService/>}/>
        <Route path="/services/family" element={<FamilyOfficeService/>}/>
        <Route path="/services/leadership" element={<LeadershipDevelopmentService/>}/>
        <Route path="/services/legal" element={<LegalConsultancyService/>}/>
        
        <Route path="/packages" element={<Packages/>}/>

        
        
        
      </Routes>
    <Footer/>
    </Router>
  )
}

export default App