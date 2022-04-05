import "./MyListPage.scss";
import { Component } from "react";
import axios from "axios";
import AddedTvShow from "../../components/AddedTvShow/AddedTvShow";

class MyList extends Component {
  state = {
    shows: [],
  };

  deleteHandler = (showId) => {
    const userId = sessionStorage.getItem("userId");

    axios
      .delete(`http://localhost:8080/mylist/${userId}/${showId}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          shows: [...this.state.shows].filter((show) => {
            return show.id !== showId;
          }),
        });
      });
  };

  componentDidMount() {
    const userId = sessionStorage.getItem("userId");
    axios.get(`http://localhost:8080/mylist/${userId}`).then((res) => {
      console.log(res);
      res.data.map((show) => {
        axios.get(`https://api.tvmaze.com/shows/${show.showId}`).then((res) => {
          this.setState({
            shows: [...this.state.shows, res.data],
          });
        });
      });
    });
  }

  render() {
    return (
      <section className="mylist">
        <div className="mylist__addedshow">
          <h1 className="mylist__title">My List</h1>
          {this.state.shows.map((show) => (
            <AddedTvShow
              premiered={show.premiered}
              deleteHandler={this.deleteHandler}
              key={show.id}
              thumbanilSrc={show.image && show.image.original}
              name={show.name}
              rating={show.rating && show.rating.average}
              showId={show.id}
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
