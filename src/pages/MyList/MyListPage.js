import "./MyListPage.scss";
import { Component } from "react";
import axios from "axios";

class MyList extends Component {
  state = {
    showList: []
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/mylist/", {
        userId: sessionStorage.getItem("userId")
      })
      .then(res => {
        console.log(res)
      })
  }
  
  render() {
  return (
    <section className="mylist">
             
    </section>
  );
}
}

export default MyList;
