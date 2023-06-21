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
    <Router basename='my-portfolio/'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/mouseMover' element={<MouseMover />} />
      </Routes>
    </Router>
  </React.StrictMode>
  </>
);