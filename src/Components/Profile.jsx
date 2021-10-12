import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  CardMedia,
  Paper,
  Typography
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Post2 from "./Post2";
import { useSelector } from "react-redux";
import { publicRequest } from "../redux2/requestMethods";
const useStyles = makeStyles((theme) => ({
  cardmain: { flex: 5 },
  card: {
    width: "100%",
    marginTop: theme.spacing(2),
    position: "relative",
    marginBottom: theme.spacing(10),
  },
  media: {
    height: "250px",
    objectFit: "contain",
  },
  pt: {
    position: "absolute",
    bottom: "-80px",
    left: `calc(50% - 50px)`,
    alignItems: "center",
    textAlign: "center",
    marginBottom: theme.spacing(2),
  },
  avatar: {
    width: "100px",
    height: "100px",
  },
}));
export default function Profile() {
  const classes = useStyles();
  const [post,setPost]=useState([]);
  const state = useSelector(state => state.user2.currentUser);
  const ondelete=(id)=>{
    console.log(id);
    const deletepost=async()=>{
      await publicRequest.delete(`post/${id}`,
      {data: {
        userId: state.user._id
      }});
     setPost((prev)=>[...prev.filter(item=> item._id!==id)]);
    }
    deletepost();
  }
   useEffect(()=>{
     const getpost =async()=>{
       try{
      const  res=await publicRequest.get(`/post/${state.user._id}/allpost`);
        setPost(res.data.sort((a,b)=>{
          return new Date(a.createdAt)-new Date(b.createdAt);
        }));

       }catch(err){
         console.log(err);
       }
    }
    getpost();
   },[state.user]);
  return (
    <div className={classes.cardmain}>
      <Paper elevation={3} className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/7235677/pexels-photo-7235677.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        />
        <div className={classes.pt}>
          <Avatar className={classes.avatar} src="https://images.pexels.com/photos/7235677/pexels-photo-7235677.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        />
          <Typography component="h2" variant="h6">
            {state.user.email}
          </Typography>
        </div>
      
      </Paper>
      <div style={{ display: "flex" }}>
        <div>
                {post.map(item=>{
                    return(
                    <Post2 id={item} delete={ondelete}data={item} key={item._id}/>)
                })}
  
                 </div>
      </div>
    </div>
  );
}
