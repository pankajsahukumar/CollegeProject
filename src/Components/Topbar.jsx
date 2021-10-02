import { AppBar, IconButton,Toolbar, Typography,Drawer, List, ListItem,ListItemText, Avatar, Hidden, Tab} from "@material-ui/core";
import { useState,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {loginuser } from "../redux2/Slices/userSlice";

const useStyles= makeStyles((theme)=>({
   toolbar:{
     display:"flex",
     justifyContent:"space-between",

   },
   tabs:{
     flexFlow:1,
   },
   search:{
       display:"flex",
   }
}));
export default function Topbar() {
  const histroy=useHistory();
  const {userInfo,pending,error} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const classes = useStyles();
  console.log(userInfo);
  const [open, setOpen] = useState(false);
  const [value,setValue]=useState("home");
  const handleChange=(event,index)=>{
        histroy.push(`/home/${index}`);
    setValue(index);
  }
const [count, setcount] = useState(0)
  const hanglech=(e)=>{
  e.preventDefault();
  const user={
    username: "mor_2314",
    password: "83r5^_"
  }
  dispatch(loginuser(user));
console.log(`after this${count}`);
setcount(count+1);
}
  return (
    <>
<AppBar position='sticky'>
  <Toolbar className={classes.toolbar}>
    <div>
        <Hidden smDown>
    <IconButton>
      <Avatar>R</Avatar>
    </IconButton>
    </Hidden>
    <Hidden smUp>
        <Typography variant="h6">work</Typography>
    </Hidden>
    </div>
    <TabContext value={value}>
          <div className={classes.tabs}>
      <Hidden smDown>
      <TabList onChange={handleChange} aria-label="simple tabs example">
      <Tab label="Item One" value="home" />
      <Tab label="Item Two" value="about" />
      <Tab label="Item Three" value="profile" />
    </TabList>
      </Hidden>
      </div>
      </TabContext>
      <Hidden smUp>
      <div className={classes.rightop}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={()=>setOpen(!open)}
            className={classes.MenuIcon}
          >
            <MenuIcon/>
          </IconButton>
      </div>
      </Hidden>
  </Toolbar>
</AppBar>
<Drawer
            variant="temporary"
            open={open}
            anchor="top"
            onClose={()=>{setOpen(!open)}}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
         <List>
          <ListItem>
            <ListItemText>
              Nishant
            </ListItemText>
          </ListItem>
          
          <ListItem>
            <ListItemText>
              Nishant
            </ListItemText>
          </ListItem>
          
          <ListItem>
            <ListItemText>
              Nishant
            </ListItemText>
          </ListItem>
          
          <ListItem>
            <ListItemText>
              Nishant
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Nishant
            </ListItemText>
          </ListItem>
         </List>
          </Drawer>
    </>
  )
}

