function CardContainer({imageUrl, text, types})
{
  let newText = text.substring(0, 100) + '...';

  return(
    <div className="card">
      <img src={imageUrl} alt="Could not load card" />
      <div className="card-text">
      <h4>{types}</h4>
      <h3>{newText}</h3>
      </div>
    </div>
  );
};

export default CardContainer;