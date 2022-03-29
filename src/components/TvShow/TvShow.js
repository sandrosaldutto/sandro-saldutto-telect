export function TvShow(props) {
  const { thumbanilSrc, name, rating } = props;

  return (
    <div>
      <img src={thumbanilSrc} />
      <p>{name}</p>
      <p>{rating || "N/A"}</p>
    </div>
  );
}
