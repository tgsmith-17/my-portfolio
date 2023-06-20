import { Link } from "react-router-dom";
import Header from "./Header";

import data from "../../data/aboutPage.json";

function About() {
  const linkStyle = {
    'color': 'white'
  };

  return (
    <div>
      <Header activeLink={[false, true, false]} />
      <div className="about">
      <h2>About Me</h2>
      <p>{data.paragraph}</p>
      <ul>{data.fluent_languages.map(lang => (
        <li key={lang}><p>{lang}</p></li>
      ))}</ul>
      <h2>My Work That's on this Site:</h2>
      <ul>
        <li>
          <Link
           style={linkStyle}
           to={'/mouseMover'}
           target="_blank">
            Mouse movement detector uh, thingy
          </Link>
        </li>
      </ul>
      <h2>Some of My Other Work:</h2>
      <ul>
        <li>
          <Link
            to="https://tgsmith-17.github.io/music-player/"
            target="_blank"
            style={linkStyle}>
            Music Player
          </Link>
          <ul>
            <li>
              <p>Still a WIP, crashes on last song but perfectly functional otherwise</p>
            </li>
          </ul>
        </li>
        <li>
          <Link style={linkStyle} to='https://github.com/tgsmith-17/my-portfolio'>
            Link to the repo for this site
          </Link>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default About;