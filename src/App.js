import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './styles/app.scss';

// Fun, Creative Stuff
import MouseMover from './Pages/Art_Stuff/RectangleMover/MouseMover';

// Pages
import Home from './Pages/describer_pages/Home';
import About from './Pages/describer_pages/About';
import Contact from './Pages/describer_pages/Contact';
import Redirect from './Pages/describer_pages/Redirect';
import MagicCardSearcher from './Pages/Art_Stuff/CardFinder/MagicCardSearcher';

function App()
{
  // let alertShown = false;

  // if(!alertShown) {
  //   alert("There is currently an issue that causes 404 on page refresh (except for this page, the home)\nPlease keep that on mind when using this site\nThank you for visiting :)");
  //   alertShown = true;
  // }

  return(
    <>
    <React.StrictMode>
      <Router basename='/my-portfolio'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/mouseMover' element={<MouseMover />} />
          <Route path='/cardSearcher' element={<MagicCardSearcher />} />

          <Route path='/*' element={<Redirect />} />
        </Routes>
      </Router>
    </React.StrictMode>
    </>
  );
};

export default App;