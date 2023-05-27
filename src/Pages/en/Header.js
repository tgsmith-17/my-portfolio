import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Header()
{
  const [selected, setSelected] = useState([true, false, false]);

  const [lang, setLang] = useState('');

  const loc = useLocation().pathname;

  useEffect(() => {
    if(loc === '/jp') {
      setLang('jp');
    }
    else if(loc === '/en') {
      setLang('en');
    }
  }, [loc]);

  const activeLinkStyle = {
    'borderBottom': "3px solid white"
  };

  const regLinkStyle = {
    'borderBottom': 'none'
  };

  return(
    <>
    <header className="header">
      {lang === "en" && <h1>My Portfolio Site</h1>}
      {lang === "jp" && <h1>僕のポートフォリオ</h1>}
      <nav>
        <ul>
          <li style={selected[0] ? activeLinkStyle : regLinkStyle}>
            <Link to={`/${lang}`} onClick={() => setSelected([true, false, false])}>Home</Link>
          </li>
          <li style={selected[1] ? activeLinkStyle : regLinkStyle}>
            <Link to={`/${lang}/about`} onClick={() => setSelected([false, true, false])}>About</Link>
          </li>
          <li style={selected[2] ? activeLinkStyle : regLinkStyle}>
            <Link to={`/${lang}/contact`} onClick={() => setSelected([false, false, true])}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Header;
