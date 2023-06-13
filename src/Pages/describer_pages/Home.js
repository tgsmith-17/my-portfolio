import { useState } from "react";

function Home()
{
  const [quote, setQuote] = useState("It will display here");
  
  const getQuote = async () => {
    try {
      var data = await (
        await fetch("https://api.kanye.rest")
      ).json();
      
      setQuote(data.quote);
    } catch(e) {
      setQuote("Unable to fetch quote. Please try again later");
    }
  };

  return(
    <div className="home">
      <h1>Home Page</h1>
      <div className="body">
        <div className="space"></div>
        <h3>Here's a random Kanye West quote</h3>
        <h2>"{quote}"</h2>
        <h3>-- Kanye West</h3>
        <button onClick={getQuote}>Get a Quote</button>
      </div>
    </div>
  );
};

export default Home;
