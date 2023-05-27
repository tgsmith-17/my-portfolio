import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './styles/app.scss';

// Handles language
import SetLang from './Pages/SetLang';

// Pages for English
import Header from './Pages/en/Header';
import Home from './Pages/en/Home';
import About from './Pages/en/About';
import Contact from './Pages/en/Contact';

// Pages for Japanese
import HomeJP from './Pages/jp/Home_JP';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<SetLang />}/>
        <Route path='/en' element={<Home />} />
        <Route path='/en/about' element={<About />} />
        <Route path='/en/contact' element={<Contact />} />

        <Route path='/jp' element={<HomeJP />} />
      </Routes>
    </Router>
  </React.StrictMode>
);