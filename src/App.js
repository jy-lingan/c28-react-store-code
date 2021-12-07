import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  return (

    <BrowserRouter>
      <div>
        <Nav />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/about" element={<About />} />

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
