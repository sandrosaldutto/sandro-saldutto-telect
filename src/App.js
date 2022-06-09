import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage/HomePage";
import SignUp from "./pages/SignUpPage/SignUpPage";
import Login from "./pages/LogInPage/LoginPage";
import MyList from "./pages/MyList/MyListPage";
import { useState } from "react";

function App() {
  const [showLogout, setShowLogout] = useState(
    sessionStorage.authToken !== undefined
  );

  const showLogoutHandler = () => {
    setShowLogout(true);
  };

  const logoutHandler = () => {
    setShowLogout(false)
    sessionStorage.clear()
  };
  return (
    <>
      <BrowserRouter>
        <Nav onClick={logoutHandler} showLogout={showLogout} />
        <Switch>
        <Route exact path="/" component={HomePage} showLogout={showLogout}/>
        <Route path="/signup" component={SignUp} />
        <Route
          path="/login"
          render={(routerProps) => (
            <Login {...routerProps} showLogoutHandler={showLogoutHandler} />
            )}
            />
        <Route path="/mylist" component={MyList}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
