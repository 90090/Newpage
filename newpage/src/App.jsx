import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Branding from './pages/Branding';
import Web from './pages/Web-development';
import Seo from './pages/Seo';
import Hosting from './pages/Hosting';
import DigitalDesign from './pages/DigitalDesign';
import Work from './pages/Work';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import PrivacyTerms from './pages/PrivacyTerms';

function App() {
  return (
    <Router>
      <div>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/web-development" element={<Web />} />
          <Route path="/seo" element={<Seo />} />
          <Route path="/hosting" element={<Hosting />} />
          <Route path="/digitaldesign" element={<DigitalDesign />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacyterms" element={<PrivacyTerms />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
