import "./TvShow.scss";
import Switch from "../Switch/Switch";

function TvShow({ thumbanilSrc, name, showId, onClick }) {
  return (
    <div onClick={() => onClick(showId)} className="tvshow">
      <img className="tvshow__image" src={thumbanilSrc} alt="Tv Show" />
      <div className="tvshow__info">
        <h2 className="tvshow__name">{name}</h2>
        <Switch showId={showId} />
      </div>
    </div>
  );
}

export default TvShow;
