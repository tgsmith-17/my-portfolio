import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function Header({activeLink})
{
  const [selected, setSelected] = useState([]);
  
  let hoverIter = 0;

  let hoverEvent = document.getElementsByTagName('li');

  const handleHover = (isHovering) => {
    if(isHovering) {
      if(hoverIter < 100) {
        hoverIter++;
      } else {
        hoverIter = 100;
      }
    } else if(!isHovering) {
      if(hoverIter > 0) {
        hoverIter--;
      } else {
        hoverIter = 0;
      }
    }
  };

  useEffect(() => {
  }, []);

  const activeLinkStyle = {
    'borderBottom': "3px solid white"
  };

  const regLinkStyle = {
    'borderBottom': 'none'
  };

  const hoverStyle = {
    'background': `linearGradient(from top, black ${100 - hoverIter}%, white ${hoverIter}%)`
  };

  useEffect(() => {
    for(let i = 0; i < hoverEvent.length; i++) {
      hoverEvent[i].addEventListener('mouseenter', handleHover(true));
      hoverEvent[i].removeEventListener('mouseenter', handleHover(true));

      hoverEvent[i].addEventListener('mouseout', handleHover(false));
      hoverEvent[i].removeEventListener('mouseout', handleHover(false));
    }
  },
  [handleHover]);

  return(
    <>
    <header className="header">
      <Link to={'/'}><h1>My Portfolio Site</h1></Link>
      <nav>
        <ul>
          <li style={hoverStyle}>
            <Link to={'/'}>Home</Link>
          </li>
          <li style={selected[1] ? activeLinkStyle : regLinkStyle}>
            <Link to={'/about'}>About</Link>
          </li>
          <li style={selected[2] ? activeLinkStyle : regLinkStyle}>
            <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Header;
