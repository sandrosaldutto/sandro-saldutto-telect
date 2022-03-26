import './App.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from './components/Nav/Nav'
import HomePage from "../src/pages/HomePage/HomePage"

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Switch>
      <Route
      exact
      path="/"
      component={HomePage}
     />
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
