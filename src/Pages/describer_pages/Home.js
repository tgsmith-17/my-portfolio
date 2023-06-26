import { useState } from "react";
import Header from "./Header";
import SumOfMe from "./SumOfMe";

function Home() {

  const [quote, setQuote] = useState("It will display here");
  const [author, setAuthor] = useState("Author");

  const getQuote = async () => {
    try {
      let data = await fetch('https://type.fit/api/quotes')
        .then(res => res.json());

      let tmp = Object.keys(data).length;

      let selected = data[Math.floor(Math.random() * tmp)];

      setQuote(selected.text);
      setAuthor(selected.author);
    } catch (e) {
      setQuote("Unable to fetch quote. Please try again later");
      console.log(e);
    }
  };

  return (
    <div>
      <Header activeLink={[true, false, false]} />
      <div className="space"></div>
      <div className="home">
        <h1>Home Page</h1>
        <div className="body">
          <h3>Fetch an Inspirational Quote</h3>
          <h2>"{quote}"</h2>
          <h3 className="author">-- {author}</h3>
          <button onClick={getQuote}>Get a Quote</button>
        </div>
      </div>
      <div className="space"></div>
      <SumOfMe />
    </div>
  );
};

export default Home;
