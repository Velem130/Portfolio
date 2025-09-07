import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import Hero3 from './components/Hero3';
import Proje from './components/Proje';
import Education from './components/Education';
import Footer from './components/Footer';
import Footer2 from './components/Footer2';
import PortfolioCode from './components/PortfolioCode'; // 👈 Your new route component

function Home() {
  return (
    <>
      <Hero />
      <Hero2 />
      <Hero3 />
      <Proje />
      <Education />
      <Footer />
      <Footer2 />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar /> {/* 👈 Now visible on every route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio-code" element={<PortfolioCode />} />
      </Routes>
    </Router>
  );
}

export default App;

