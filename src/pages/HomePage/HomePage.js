import "./HomePage.scss";
import React from "react";
import useFetch from "../../hooks/UseFetch";
import SearchedShow from "../../components/SearchedShow/SearchedShow"

function HomePage() {
  const { data, setData } = useFetch();
  return (
    <main>
      <input
        type="text"
        placeholder="Search your favourite show"
        value={data.slug}
        onChange={(e) => setData({ ...data, slug: e.target.value })}
      />
      <br />
      {data.results.length > 0 ? <SearchedShow show={data.results[0]} /> : null}
    </main>
  );
}

export default HomePage;