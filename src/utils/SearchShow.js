import axios from "axios";

export default axios.create({
  searchShow: "https://api.tvmaze.com/search/shows?q=",
});