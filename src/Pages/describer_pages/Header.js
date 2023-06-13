import { Link } from "react-router-dom";
import { useState } from "react";

function Header()
{
  const [selected, setSelected] = useState([true, false, false]);

  const activeLinkStyle = {
    'borderBottom': "3px solid white"
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
            <Link to={'/'} onClick={() => setSelected([true, false, false])}>Home</Link>
          </li>
          <li style={selected[1] ? activeLinkStyle : regLinkStyle}>
            <Link to={'/about'} onClick={() => setSelected([false, true, false])}>About</Link>
          </li>
          <li style={selected[2] ? activeLinkStyle : regLinkStyle}>
            <Link to={'/contact'} onClick={() => setSelected([false, false, true])}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Header;
