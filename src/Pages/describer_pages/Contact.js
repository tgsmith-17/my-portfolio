import Header from "./Header";
import { Link } from "react-router-dom";

function Contact()
{
  const linkStyle = {
    'color': 'black'
  };

  return(
    <div>
      <Header activeLink={[false, false, true]}/>
      <div className="space"></div>
      <div className="contact">
        <h2>Ways you can contact me:</h2>
        <ul>
          <li>Email: gagesmith369@gmail.com</li>
          <li>
            <Link style={linkStyle}
            to='https://www.linkedin.com/in/gage-smith-822644230/'
            target="_blank">
              My LinkedIn Profile  
            </Link>
          </li>
          <li>
            <p>My GitHub -- <Link
              style={linkStyle}
              to='https://github.com/tgsmith-17'
              target="_blank">
              tgsmith-17
            </Link>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;