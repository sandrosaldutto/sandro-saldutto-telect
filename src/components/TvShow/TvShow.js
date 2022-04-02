import "./TvShow.scss";
import Switch from "../Switch/Switch";

function TvShow({ thumbanilSrc, name, rating, showId, onClick }) {

  return (
    <div onClick={() => onClick(showId) } className="tvshow">
      <img className="tvshow__image" src={thumbanilSrc} />
      <div className="tvshow__info">
        <h2 className="tvshow__name">{name}</h2>
        <p className="tvshow__rating">Rating: {rating || "N/A"}</p>
        <Switch showId={showId}/>
      </div>
    </div>
  );
}

export default TvShow;
