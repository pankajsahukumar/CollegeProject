import { CssBaseline, Hidden } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import './App.css';
import NavBar from "./Components/Navbar";
import Routers from "./Components/Routers";

function App() {
 
  return (
    <Router>
      <CssBaseline/>
      <NavBar/>
      <Switch>
        <div className="pages">
        <Routers/>
          </div> 
      </Switch>
    </Router>
  );
}

export default App;
