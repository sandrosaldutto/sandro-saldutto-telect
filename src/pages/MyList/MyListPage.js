import "./MyListPage.scss";
import { Component } from "react";
import axios from "axios";
import TvShow from "../../components/TvShow/TvShow";

class MyList extends Component {
  state = {
    showIds: [],
    shows: [],
    selectedShow: null,
  };

  tvShowDetails = (showId) => {
    axios.get(`https://api.tvmaze.com/shows/${showId}`).then((res) => {
      this.setState({
        selectedShow: res.data,
      });
    });
  }

  componentDidMount() {
    const userId = sessionStorage.getItem("userId");
    axios.get(`http://localhost:8080/mylist/${userId}`).then((res) => {
      console.log(res);
      this.setState({
        showIds: res.data,
      });
    });
  }

  componentDidUpdate() {
    if (this.state.shows.length === 0) {
      Promise.all(
        this.state.showIds.map((show) => {
          return axios
            .get(`https://api.tvmaze.com/shows/${show.showId}`)
            .then((res) => {
              return res.data;
            });
        })
      ).then((res) => {
        console.log(res);
        this.setState({
          shows: res,
        });
      });
    }
  }

  render() {
    if (this.state.selectedShow === null) {
      return (
        <section className="mylist">
          <div>
            {this.state.shows.map((show) => (
              <TvShow
                onClick={this.tvShowDetails}
                key={show.id}
                thumbanilSrc={show.image && show.image.medium}
                name={show.name}
                rating={show.rating && show.rating.average}
                showId={show.id}
              />
            ))}
          </div>
        </section>
      );
    }
    if (this.state.selectedShow !== null) {
      return (
      // backbutton with onclick with a function that sets state for selected shoe to null
      <div>show</div>
      // display tv show details
      )}
  }
}

export default MyList;
