const SeriesCard = ({ info }) => {
  const { thumb, series } = info;
  return (
    <div className="col-15 ">
      <div className="card">
        <img src={thumb} alt={series} />
        <h4>{series}</h4>
      </div>
    </div>
  );
};

export default SeriesCard;
