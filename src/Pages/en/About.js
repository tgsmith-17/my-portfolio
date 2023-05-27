import { Link } from "react-router-dom";

import data from "../../data/aboutPage.json";

function About() {
  const linkStyle = {
    'color': 'white'
  };

  return (
    <div className="about">
      <h2>About Me</h2>
      <p>{data.paragraph}</p>
      <ul>{data.fluent_languages.map(lang => (
        <li key={lang}><p>{lang}</p></li>
      ))}</ul>
      <h2>My Work:</h2>
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
          <p>My GitHub -- <Link
            style={linkStyle}
            to='https://github.com/tgsmith-17'
            target="_blank">
            tgsmith-17
          </Link>
          </p>
        </li>
        <li>
          <Link
           style={linkStyle}
           to={'/mouseMover'}
           target="_blank">
            Mouse movement detector uh, thingy
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default About;