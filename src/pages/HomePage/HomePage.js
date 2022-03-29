import "./HomePage.scss";
import { useState } from "react";
import { useDebounce } from "../../hooks/Debounce/Debounce"
import axios from "axios";
import { TvShow } from "../../components/TvShow/TvShow";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [tvShows, setTvShows] = useState([]);
  
  const isEmpty = !tvShows || tvShows.length === 0;

  const changeHandler = (e) => {
    e.preventDefault();

    if(e.target.value === "") {
      setTvShows([]);
    }
    setSearchQuery(e.target.value);
  };

  const prepareSearchQuery = (query) => {
    const url = `http://api.tvmaze.com/search/shows?q=${query}`;

    return encodeURI(url);
  };

  const searchTvShow = async () => {
    if (!searchQuery || searchQuery.trim() === "") return;
    
    setLoading(true);

    const URL = prepareSearchQuery(searchQuery);

    const res = await axios.get(URL).catch((err) => {
      console.log("Error: ", err);
    });

    if (res) {
      console.log("Res: ", res.data);
      setTvShows(res.data)
    }
    setLoading(false);

  };

  useDebounce(searchQuery, 500, searchTvShow);

  return (
    <main>
      <input
        value={searchQuery} 
        onChange={changeHandler}
        type="search"
        placeholder="Search for Show"
      ></input>
      {!isLoading && !isEmpty && (
            <>
              {tvShows.map(({ show }) => (
                <TvShow
                  key={show.id}
                  thumbanilSrc={show.image && show.image.medium}
                  name={show.name}
                  rating={show.rating && show.rating.average}
                />
              ))}
            </>
          )}
    </main>
  );
}

export default HomePage;
