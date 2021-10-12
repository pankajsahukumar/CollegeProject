import { Button, Collapse, List, ListItem, ListItemIcon, ListItemText, ListSubheader, makeStyles } from '@material-ui/core';
import * as React from 'react';
import { Link } from 'react-router-dom';
const useStyles = makeStyles(theme=>({
  left:{
      flex:"3",
      position:"sticky",
      top:0,
      left:0,
      backgroundColor:theme.palette.background.paper,
      overflow:"auto",
      maxHeight: `calc(100vh - 70px)`,
  }
}))
export default function Leftside() {
  const [open, setOpen] = React.useState(true);
  const classes=useStyles();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.left}>
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      
      <ListItem component={({innerRef,...props}) => <Link {...props} to="/home" />}>
      <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="Feed" />
      </ListItem>
        <ListItem component={({innerRef,...props}) => <Link {...props} to="/messanger" />}>
      <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="Chat" />
      </ListItem>
      <ListItem component={({innerRef,...props}) => <Link {...props} to="/editprofile" />}>
      <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="Edit Profile" />
      </ListItem>
      <ListItem component={({innerRef,...props}) => <Link {...props} to="/profile" />}>
      <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
      <ListItem component={({innerRef,...props}) => <Link {...props} to="/createpost" />}>
      <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="Create New Post" />
      </ListItem>

      <Button onClick={handleClick}>Show more</Button>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button sx={{ pl: 4 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </List>
    </div>
  );
}
