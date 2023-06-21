import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './styles/app.scss';

// Fun, Creative Stuff
import MouseMover from './Pages/Art_Stuff/MouseMover';

// Pages for English
import Home from './Pages/describer_pages/Home';
import About from './Pages/describer_pages/About';
import Contact from './Pages/describer_pages/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='my-portfolio/' element={<Home />}/>
        <Route path='my-portfolio/about' element={<About />} />
        <Route path='my-portfolio/contact' element={<Contact />} />
        <Route path='my-portfolio/mouseMover' element={<MouseMover />} />
      </Routes>
    </Router>
  </React.StrictMode>
  </>
);