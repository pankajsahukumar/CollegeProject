import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button, InputBase } from '@material-ui/core';
import Comment from './Comment';
import { useSelector } from 'react-redux';
import { publicRequest } from '../redux2/requestMethods';
import { Delete } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    width:'600px',
    margin:theme.spacing(3),
  },
  deletebtn:{
   color:"red",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
  },
  avatar: {
    backgroundColor: red[500],
  },
  like:{
    color:'red',
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const state = useSelector(state => state.user2.currentUser)
  const [expanded, setExpanded] = React.useState(false);
  const [comments,setComments]=useState([]);
  const [comment,setComment]=useState('');
 const [isLike, setisLike] = useState(false);
 const handlelike=()=>{
   const postlike=async()=>{
      try{
        const res=await publicRequest.put(`/post/${props.data._id}/like`,{"userId":state.user._id});
        console.log(res);
        setisLike(!isLike);
      }catch(err){
        console.log(err);
      }
   }
   
   postlike();
 };
 useEffect(()=>{
   const data=props.data.postlike;
   data.map(item=>{if(item===state.user._id){
     setisLike(true);
   }})
 },[]);
 const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 useEffect(()=>{
   const getcomment=async()=>{
     try{
     const res= await publicRequest.get('/comment/'+props.data._id);
     setComments(res.data);
     }catch(err){
       console.log(err);
     }
   }
   getcomment();
 },[]);
  const Add =()=>{
    setComments((prev)=>[...prev,{"postmessage":comment}]);
     const postcomment =async()=>{
       try{
         const comm ={"postId":props.data._id,"userId":state.user._id,"postmessage":comment};
         const res = await publicRequest.post('/comment/create',comm);
         console.log(comments);
         setComment('');
       }catch(err){
         console.log(err);
       }
     }
     postcomment();
  }
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar alt={state.user.email} className={classes.avatar} src="https://images.pexels.com/photos/7235677/pexels-photo-7235677.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          >
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={()=>props.delete(props.data._id)}>
            <Delete className={classes.deletebtn}/>
          </IconButton>
        }
        title={state.user.email}
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.data.des}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon className={isLike&&classes.like} onClick={handlelike}/>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Typography>Comments</Typography>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent style={{maxHeight:"100px",
      overflow:"auto"}}>
        {comments.map((item,index)=>{
          return (<Comment data={item} key={index}/>);
        })}  
        </CardContent>
        <InputBase placeholder="comments" value={comment} onChange={(e)=>setComment(e.target.value)} placeholder="Put Your comment"></InputBase>
        <Button onClick={Add}>add</Button>
      </Collapse>
    </Card>
  );
}
