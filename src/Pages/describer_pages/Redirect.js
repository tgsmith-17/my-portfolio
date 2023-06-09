import { Link } from "react-router-dom";

function Redirect()
{
  
  return(
    <div className="padding">
      <div className="error-page">
        <h1>Sorry!</h1>
        <h2>As far as I'm aware, GitHub Pages doesn't (technically) allow having multiple routes, so this page might come up a lot :/</h2>
        <h2>But don't fret!</h2>
        <h2>You'll be redirected to the Home page with a click of the button below :)</h2>
        <button className="redirect-button"><Link to={'/'}>Home Page</Link></button>
      </div>
    </div>
  );
};

export default Redirect;