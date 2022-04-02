import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage/HomePage";
import SignUp from "./pages/SignUpPage/SignUpPage";
import Login from "./pages/LogInPage/LoginPage";
import MyList from "./pages/MyList/MyListPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/mylist" component={MyList} />
      </BrowserRouter>
    </>
  );
}

export default App;
