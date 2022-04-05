import "./HomePage.scss";
import { useState } from "react";
import { useDebounce } from "../../hooks/debounce";
import axios from "axios";
import TvShow from "../../components/TvShow/TvShow";

function HomePage() {
  // states
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [tvShows, setTvShows] = useState([]);

  // if no shows
  const isEmpty = !tvShows || tvShows.length === 0;

  // handling input field
  const inputHandler = (e) => {
    e.preventDefault();

    if (e.target.value === "") {
      setTvShows([]);
    }
    setSearchQuery(e.target.value);
  };

  // connect to api for show by name
  const prepareSearchQuery = (query) => {
    const url = `http://api.tvmaze.com/search/shows?q=${query}`;

    return encodeURI(url);
  };

  const searchTvShow = async () => {
    if (!searchQuery || searchQuery.trim() === "") return;

    setLoading(true);

    const URL = prepareSearchQuery(searchQuery);

    const res = await axios.get(URL).catch((err) => {
      console.log(err);
    });

    if (res) {
      setTvShows(res.data);
    }
    setLoading(false);
  };

  useDebounce(searchQuery, 500, searchTvShow);

  return (
    <main className="home">
      <input
        value={searchQuery}
        onChange={inputHandler}
        type="search"
        placeholder="Search for Show"
        className="home__searchbar"
      ></input>
      {!isLoading && isEmpty && (
        <p className="home__shows-found">No Tv Shows Found </p>
      )}
      {!isLoading && !isEmpty && (
        <div className="home__show">
          {tvShows.map(({ show }) => (
            <TvShow
              key={show.id}
              thumbanilSrc={show.image && show.image.medium}
              name={show.name}
              showId={show.id}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default HomePage;
