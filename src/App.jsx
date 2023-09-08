import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Pricing, About, Contact, Career } from './mainPages';
import { Navbar, Cta, Footer } from './components';
import './App.scss';

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/career" element={<Career />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Cta />
      <Footer />
    </div>
  </Router>
);

export default App;
