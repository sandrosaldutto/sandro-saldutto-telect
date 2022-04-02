import "./AddedTvShow.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import deleteIcon  from  "../../assets/icons/delete.svg"

function AddedTvShow({
  thumbanilSrc,
  name,
  rating,
  status,
  summary,
  website,
}) {
  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <div className="added-tvshow">
        <div className="added-tvshow__top">
        <h2 className="added-tvshow__name">{name}</h2>
        <img className="added-tvshow__delete" src={deleteIcon}/>
        </div>
        <img className="added-tvshow__image" src={thumbanilSrc} />
        {/* <p className="added-tvshow__summary">
          {summary && removeTags(summary)}
        </p> */}
        <div className="added-tvshow__info-container">
          <div className="added-tvshow__column">
            <h3 className="added-tvshow__column-title">Rating</h3>
            <p className="added-tvshow__info">{rating ? rating : "N/A"}</p>
          </div>
          <div className="added-tvshow__column">
            <h3 className="added-tvshow__column-title">Status</h3>
            <p className="added-tvshow__info">{status && status}</p>
          </div>
        </div>
        <div className="added-tvshow__buttons">
          {website ? (
            <button className="added-tvshow__website">
              <a href={website} target="_blank" rel="noreferrer">
                Official Site
              </a>
            </button>
          ) : (
            <p className="added-tvshow__no-site">Official Site: N/A</p>
          )}
          <Link to="/">
            <button className="added-tvshow__episodes">Episodes</button>
          </Link>
        </div>    
    </div>
  );
}

export default AddedTvShow;
