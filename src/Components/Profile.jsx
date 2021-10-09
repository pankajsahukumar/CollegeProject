import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  CardMedia,
  Collapse,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import Post from "./Post";
import Rightbar from "./Rightbar";
import { TransitionGroup } from "react-transition-group";
import Post2 from "./Post2";
import { login } from "../redux2/apiCalls/userapi";
import { useDispatch } from "react-redux";
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
  const [arr,setArr]=useState([1,2,3,4,5,6,7]);
  const ondelete=(id)=>{
     setArr((prev) => [...prev.filter((i) => i !== id)]);
  }

  return (
    <div className={classes.cardmain}>
      <Paper elevation={3} className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/7235677/pexels-photo-7235677.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        />
        <div className={classes.pt}>
          <Avatar className={classes.avatar} />
          <Typography component="h2" variant="h6">
            Pankaj
          </Typography>
        </div>
      </Paper>
      <div style={{ display: "flex" }}>
        <div>
          <TransitionGroup>
                {arr.map(item=>{
                    return(<Collapse key={item}>
                    <Post2 delete={ondelete} id={item}/>
                    </Collapse>)
                })}
             </TransitionGroup>
                 </div>
        <Rightbar />
      </div>
    </div>
  );
}
