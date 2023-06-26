import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function Header({activeLink})
{
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setSelected(activeLink);
  }, [activeLink]);

  const activeLinkStyle = {
    'borderBottom': "3px solid black"
  };

  const regLinkStyle = {
    'borderBottom': 'none'
  };

  return(
    <>
    <header className="header">
      <Link to={'/'}><h1>My Portfolio Site</h1></Link>
      <nav>
        <ul>
          <li style={selected[0] ? activeLinkStyle : regLinkStyle}>
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
