import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Portfolio from './pages/Portfolio';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1, paddingTop: '70px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
