import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Card, CardActions, CardContent, CardMedia, IconButton, Paper, Typography } from '@material-ui/core'
import React from 'react'
import Post from './Post';
const useStyles = makeStyles(theme=>({
    cardmain:{flex:5},
    card:{
       width:"100%",
       marginTop:theme.spacing(2),
       position:"relative",
       marginBottom:theme.spacing(10),
    },
    media:{
        height:"250px",
        objectFit:"contain",
    },
    pt:{
    position:"absolute",
    bottom:"-80px",
    left:`calc(50% - 50px)`,
    alignItems:"center",
    textAlign:"center",
    marginBottom:theme.spacing(2),
},
    avatar:{
    width:"100px",
      height:"100px",
        
    }
}))
export default function Profile() {
    const classes = useStyles();
    return (
        <div className={classes.cardmain}>
             <Paper elevation={3} className={classes.card}>
             <CardMedia
             className={classes.media}
             image="https://images.pexels.com/photos/7235677/pexels-photo-7235677.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
            <div className={classes.pt}>
            <Avatar className={classes.avatar}/>
               <Typography component="h2" variant="h6">Pankaj</Typography>
             </div>
             </Paper>
             <Post/>
             <Post/>
             <Post/>
             <Post/>
             <Post/>
             <Post/>
             </div>
    )
}
