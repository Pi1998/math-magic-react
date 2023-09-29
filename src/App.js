import React from 'react';
import {
  BrowserRouter as Router, Route, Routes, Link,
} from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import DadJoke from './components/DadJoke';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <span className="page-name">
          Math Magicians
        </span>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/quote">Quote</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<DadJoke />} />
      </Routes>
    </Router>
  );
}

export default App;
