import "./HomePage.scss";
import NewRelease from "../../components/NewRelease/NewRelease"
import { Component } from "react";
import getData from "../../utils/api";

class HomePage extends Component {
  
  state = {
    newRelease: [],
  }

  componentDidMount() {
    getData
      .getNewReleases()
      .then((res) => {
        console.log(res)
        this.setState({
            newReleases: res.data
        })
      })
  }
  
  render() {
  return (
    <section className="home"> 
    </section>
  );
}
}

export default HomePage;
