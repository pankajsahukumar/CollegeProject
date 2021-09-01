import { CssBaseline, Hidden } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Home from "./pages/Home";
import Middle from "./Components/Middle";
import Leftside from "./Components/Leftside";
import Topbar from "./Components/Topbar";
import Profile from "./Components/Profile";
const useStyles =makeStyles(theme=>({
  bt:{
    display:"flex",
  }
}));
function App() {
 const classes = useStyles();
  return (
    <Router>
      <CssBaseline/>
      <Topbar/>
      <Switch>
        <Redirect exact from="/home" to="/home/about"/>
        <Route path="/home/profile">
          <div className={classes.bt}>
            <Leftside/>
          <Middle/>
          </div>
        </Route>
        <Route path="/home/about">
          <div className={classes.bt}>
         <Hidden smDown>
          <Leftside/>
          </Hidden>

          <Profile/>
          </div>
          
        </Route>
        <Route path="/home/:page?" render={props =><Home {...props}/>}/>
      </Switch>
    </Router>
  );
}

export default App;
