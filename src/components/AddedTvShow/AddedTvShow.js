import "./AddedTvShow.scss";

function AddedTvShow({
  thumbanilSrc,
  name,
  rating,
  network,
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
      <h2 className="added-tvshow__name">{name}</h2>
      <img className="added-tvshow__image" src={thumbanilSrc} />
      <div className="added-tvshow__info-container">
        <div className="added-tvshow__column">
          <h3 className="added-tvshow__column-title">Rating</h3>
          <p className="added-tvshow__info">{rating ? rating : "N/A"}</p>
        </div>
        <div className="added-tvshow__column">
          <h3 className="added-tvshow__column-title">Network</h3>
          <p className="added-tvshow__info">{network || "N/A"}</p>
        </div>
        <div className="added-tvshow__column">
          <h3 className="added-tvshow__column-title">Status</h3>
          <p className="added-tvshow__info">{status && status}</p>
        </div>
      </div>
      <p className="added-tvshow__summary">
        Summary: {summary && removeTags(summary)}
      </p>
      <div className="added-tvshow__buttons">
        {website ? (
         
          <button className="added-tvshow__website">
            <a href={website} target="_blank" rel="noreferrer">
              website
            </a>
          </button>

        ) : (
          "No official site"
        )}
        <button className="added-tvshow__episodes">Episodes</button>
        </div>
    </div>
  );
}

export default AddedTvShow;
