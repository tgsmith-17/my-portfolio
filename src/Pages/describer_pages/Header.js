import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header({activeLink})
{
  const [selected, setSelected] = useState([]);

  const activeLinkStyle = {
    'borderBottom': "3px solid white"
  };

  const regLinkStyle = {
    'borderBottom': 'none'
  };

  useEffect(() => {
    setSelected(activeLink);
  },
  [activeLink]);

  return(
    <>
    <header className="header">
      <Link to={'/'}><h1>My Portfolio Site</h1></Link>
      <nav>
        <ul>
          <li style={selected[0] ? activeLinkStyle : regLinkStyle}>
            <Link to={'my-portfolio/'}>Home</Link>
          </li>
          <li style={selected[1] ? activeLinkStyle : regLinkStyle}>
            <Link to={'my-portfolio/about'}>About</Link>
          </li>
          <li style={selected[2] ? activeLinkStyle : regLinkStyle}>
            <Link to={'my-portfolio/contact'}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Header;
