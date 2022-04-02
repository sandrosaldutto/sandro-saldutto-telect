import "./MyListPage.scss";
import { Component } from "react";
import axios from "axios";
import AddedTvShow from "../../components/AddedTvShow/AddedTvShow";

class MyList extends Component {
  state = {
    showIds: [],
    shows: [],
  };
  
  componentDidMount() {
    const userId = sessionStorage.getItem("userId");
    axios.get(`http://localhost:8080/mylist/${userId}`).then((res) => {
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
            console.log(res.data)
            return res.data;
            });
        })
      ).then((res) => {
        this.setState({
          shows: res,
        });
      });
    }
  }

  render() {
    return (
      <section className="mylist">
        <div className="mylist__addedshow">
          {this.state.shows.map((show) => (
            <AddedTvShow
              key={show.id}
              thumbanilSrc={show.image && show.image.original}
              name={show.name}
              rating={show.rating && show.rating.average}
              showId={show.id}
              network={show.network.name}
              status={show.status}
              summary={show.summary}
              website={show.officialSite}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default MyList;
