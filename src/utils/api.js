import axios from "axios";

const BASE_URL = "https://api.tvmaze.com/"
const getData = {
  getNewReleases: () => axios.get(`${BASE_URL}/schedule/full`),
};

export default getData;