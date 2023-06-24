function CardContainer({imageUrl})
{
  return(
    <div className="card">
      <img src={imageUrl} alt="../../../../public/unavailable" />
    </div>
  );
};

export default CardContainer;