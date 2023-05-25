import { useState } from "react";

function Home()
{
  const [quote, setQuote] = useState("It will display here");
  
  const getQuote = async () => {
    var data = await (
      await fetch("https://api.kanye.rest")
    ).json();
    
    setQuote(data.quote);
  };

  return(
    <div className="home">
      <div className="title">
        <h1>Home Page</h1>
      </div>
      <h2>Here's a random Kanye West quote</h2>
      <h2>"{quote}"</h2>
      <h3>-- Kanye West</h3>
      <button onClick={getQuote}>Press Here</button>
    </div>
  );
};

export default Home;
