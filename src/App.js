import './App.css';
import Main from "./Components/UserCard/Main/Main";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import UserDetails from './Components/UserDetails/UserDetails';

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main></Main>
          </Route>
          <Route path="/user/:userId">
            <UserDetails></UserDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
