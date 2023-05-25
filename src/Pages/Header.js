import { Link } from "react-router-dom";

function Header()
{
  const linkStyling = {
    'textDecoration': 'none',
    'color': 'black',
    'justifyContent': 'space-around'
  };

  return(
    <nav className="header">
      <h1>My Portfolio Site</h1>
      <Link to={'/'} style={linkStyling}>Home</Link>
      <Link to={'/about'} style={linkStyling}>About</Link>
    </nav>
  );
};

export default Header;
