const SeriesCard = ({key, title, img}) => {
  return (
    <div className="col-15 ">
      <div className="card">
        <img src={img} alt={title} />
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default SeriesCard;
