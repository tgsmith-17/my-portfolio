import Header from '../../describer_pages/Header';
import { useState } from 'react';
import CardContainer from './CardContainer';

function MagicCardSearcher()
{
  const [searchQuery, setSearchQuery] = useState([]);
  const [cards, setCards] = useState([{
    "name": "Shalai's Acolyte",
    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=574513&type=card",
    "text": "Kicker {1}{G} (You may pay an additional {1}{G} as you cast this spell.\nFlying\nIf Shalai's Acolyte was kicked, it enters the battlefield with two +1/+1 counters on it."
  }]);

  const getCardData = async (e) => {
    e.preventDefault();
    try {
      let data = await fetch(`https://api.magicthegathering.io/v1/cards?name=${searchQuery}`).then(res => res.json());
      setCards(Array.from(data.cards));
      console.log(data);
    } catch(e) {
      console.log(e);
    }
    console.log(searchQuery);
    // console.log(options);
  };

  return(
    <>
    <div>
      <Header activeLink={[false, true, false]} />
      <div className="space"></div>
      <div className="card-page">
        <div className="card-search">
          <form
           onSubmit={getCardData}>
            <label htmlFor="name">Card Name:</label>
            <input type='text'
            placeholder='Demonic Tutor'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            required />
            {/* <div className="space"></div> */}
            <button>Search</button>
          </form> 
        </div>
      </div>
      <div className="cards">
        {cards.map((card) => (
          <CardContainer
            key={card.multiverseid}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default MagicCardSearcher;