const SeriesCard = ({info}) => {
  return (
    <div className="col-15 ">
      <div className="card">
        <img src={info.thumb} alt={info.series} />
        <h4>{info.series}</h4>
      </div>
    </div>
  );
};

export default SeriesCard;
