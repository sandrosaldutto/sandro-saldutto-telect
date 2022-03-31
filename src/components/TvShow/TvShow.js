import "./TvShow.scss";
import Switch from "../Switch/Switch";

export function TvShow({ thumbanilSrc, name, rating, id }) {

  return (
    <div className="tvshow">
      <img className="tvshow__image" src={thumbanilSrc} />
      <div className="tvshow__info">
        <h2 className="tvshow__name">{name}</h2>
        <p className="tvshow__rating">Rating: {rating || "N/A"}</p>
        <Switch id={id}/>
      </div>
    </div>
  );
}
