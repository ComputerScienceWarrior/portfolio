import './App.css';
import Home from './components/Home';
import ContactMe from './components/ContactMe'
import AboutMe from './components/AboutMe'
import Error from './components/Error';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
