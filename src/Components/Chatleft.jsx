import { Avatar,  ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import React, { useEffect, useState } from 'react'
import { publicRequest } from '../redux2/requestMethods';
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
export default function Chatleft(props) {
    const classes = useStyles();
    const[user, setUser] = useState({});
    useEffect(() => {
     const friendId = props.conv.members.find((m)=> m!== props.currentUser._id);
     const getUser = async()=>{ 
         try{
         const res = await publicRequest.get('user/?userId='+friendId);
         setUser(res.data);
         }catch(err)
         {
             console.log(err);
         }
     }
     getUser();
    }, [props.currentUser,props.conv])
    return (   
    <ListItem button onClick={()=>{props.start(props.conv)}}>
    <ListItemAvatar>
      <Avatar src={user?.profilepic}>
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary={user.email}  />
  </ListItem>
          )
}
