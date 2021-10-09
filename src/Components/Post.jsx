import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, makeStyles, Menu, MenuItem, Typography } from '@material-ui/core'
import React from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { LocalActivity } from '@material-ui/icons';
const useStyles = makeStyles(theme=>({
    cardaction:{
      flex:4,
      justifyContent:"space-around"
    },
    card:{
      width:"500px",
      margin:theme.spacing(2),
      maxHeight:"500px",
    }
    ,
    toplist:{
        display:"flex",
        justifyContent:"space-between",
    }
}));

 function Post({info}) {
    const classes=useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
        <>
          <Card className={classes.card}> 
          <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          






            <MoreVertIcon
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      </MoreVertIcon>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Delete</MenuItem>
        <MenuItem onClick={handleClose}>Talk</MenuItem>
      </Menu>
          </IconButton>
        }
        title={info?.title&&"hellow"}
        subheader="September 14, 2016"
      />
      
      <CardContent>
        <Typography variant="body2">{info?.description}</Typography>
                </CardContent>
      
      {info?.image&&<CardMedia 
      image={info?.image}style={{height:"100px",width:"100%",maxHeight:"300px",}}/>}
      <CardContent style={{width:"100%"}}>
          <IconButton>
              <LocalActivity/>
          </IconButton>
          <IconButton>
              <LocalActivity/>
          </IconButton>    
          <IconButton style={{float:"right",marginRight:"10px"}}>
              <LocalActivity/>
          </IconButton>
      </CardContent>
        </Card>  
        </>
    )
}
export default Post;