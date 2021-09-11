import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { LocalActivity } from '@material-ui/icons';
const useStyles = makeStyles(theme=>({
    cardaction:{
        width:"100%",
        display:"flex",
        justifyContent:"space-around"

    },
    card:{
        margin:theme.spacing(2),
    }
    ,
    toplist:{
        display:"flex",
        justifyContent:"space-between",
    }
}));

 function Post({info}) {
    const classes=useStyles();
    return (
        <>
          <Card className={classes.card}> <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon/>
          </IconButton>
        }
        title={info?.title&&"hellow"}
        subheader="September 14, 2016"
      />
      
      <CardContent>
        <Typography variant="body2">{info?.description&&"pankaj"}</Typography>
                </CardContent>
      <CardMedia 
      image={info?.image}style={{height:"600px",objectFit:"contain"}}/>
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