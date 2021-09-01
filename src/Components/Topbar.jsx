import { AppBar, IconButton, Toolbar, Typography,Drawer, List, ListItem,ListItemText, Avatar, Hidden, Tab} from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import { useHistory } from "react-router-dom";

const useStyles= makeStyles((theme)=>({
   toolbar:{
     display:"flex",
     justifyContent:"space-between",

   },
   rightop:{
       display:"flex",
       justifyContent:"space-between",
   },
   search:{
       display:"flex",
       
   },
   MenuIcon:{
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
   }
}));
export default function Topbar() {
  const histroy=useHistory();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [value,setValue]=useState("home");
  const handleChange=(event,index)=>{
        histroy.push(`/home/${index}`);
    setValue(index);
  }
  return (
    <div className="App">
      <TabContext value={value}>
<AppBar position="static">
  <Toolbar className={classes.toolbar}>
    <div>
        <Hidden smDown>
    <IconButton>
      <Avatar>F</Avatar>
    </IconButton>
    </Hidden>
    <Hidden smUp>
        <Typography variant="h6">Work</Typography>
    </Hidden>
    </div>
   
          <div>
      <Hidden smDown>
      <TabList onChange={handleChange} aria-label="simple tabs example">
      <Tab label="Item One" value="home" />
      <Tab label="Item Two" value="about" />
      <Tab label="Item Three" value="profile" />
    </TabList>
      </Hidden>
      </div>
      <div className={classes.rightop}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={()=>setOpen(!open)}
            className={classes.MenuIcon}
          >
            <MenuIcon/>
          </IconButton>
      </div>
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
          </TabContext>
    </div>
  )
}

