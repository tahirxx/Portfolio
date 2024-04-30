
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';

//set up routing and import router and browser code
export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Contact' element={<Contact />} />
                
        </Routes>
      </div>
    </Router>
  )
}
