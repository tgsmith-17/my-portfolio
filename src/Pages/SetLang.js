import { Link } from "react-router-dom";

function SetLang()
{
  return(
    <>
    <div className="spacer"></div>
    <div className="popout">
      <Link to={'/en'}>ENGLISH</Link>
      <Link to={'/jp'}>日本語</Link>
    </div>
    </>
  );
};

export default SetLang;