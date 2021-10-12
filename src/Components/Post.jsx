import clsx from 'clsx';
import { Avatar, Button, Card, CardContent,CardActions, CardHeader, CardMedia, Collapse, IconButton, InputBase, makeStyles, Menu, MenuItem, Typography } from '@material-ui/core'
import React, { useState,useEffect } from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import FavoriteIcon from '@material-ui/icons/Favorite';
import Comment from './Comment';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { publicRequest } from '../redux2/requestMethods';
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
    },
    expand: {
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
    },
    like:{
      color:'red',
    }
}));

 function Post({info}) {const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [comments,setComments]=useState([]);
  const [comment,setComment]=useState('');
  const state = useSelector(state => state.user2.currentUser);
  const [countlike,setCountlike]=useState(info.postlike.length);
 const [isLike, setisLike] = useState(false);
const PF=process.env.REACT_APP_PATH_KEY;
 const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const handlelike=()=>{
    const postlike=async()=>{
       try{
         const res=await publicRequest.put(`/post/${info._id}/like`,{"userId":state.user._id});
         setisLike(!isLike);
         if(!isLike){
           setCountlike(countlike+1);
         }else{
           setCountlike(countlike-1);
         }
       }catch(err){
         console.log(err);
       }
    }
    postlike();
  };
 useEffect(()=>{
  const getcomment=async()=>{
    try{
    const res= await publicRequest.get('/comment/'+info._id);
    setComments(res.data);
    console.log(comments);
    }catch(err){
      console.log(err);
    }
  }
  getcomment();
},[]);

useEffect(()=>{
  const data=info.postlike;
  data.map(item=>{if(item===state.user._id){
    setisLike(true);
  }})
},[]);
  const Add =()=>{
    setComments((prev)=>[...prev,{"postmessage":comment}]);
     const postcomment =async()=>{
       try{
         const comm ={"postId":info._id,"userId":state.user._id,"postmessage":comment};
         const res = await publicRequest.post('/comment/create',comm);
         console.log(comments);
         setComment('');
       }catch(err){
         console.log(err);
       }
     }
     postcomment();
  }

    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const chatstart=(id)=>{
    console.log(id);
    handleClose();
  }
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
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {(state.user._id!==info.userId)&&(<MenuItem onClick={()=>{chatstart(info.userId)}}>Chat</MenuItem>)}
      </Menu>
          </IconButton>
        }
        title={info?.title&&"hellow"}
        subheader="September 14, 2016"
      />
      
      <CardContent>
        <Typography variant="body2">{info.postdes}</Typography>
                </CardContent>
      
      {info?.imgurl&&<CardMedia 
      image={PF+info.imgurl}style={{height:"100px",width:"100%",maxHeight:"300px",}}/>}
      
      <CardActions disableSpacing>
        <div>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon className={isLike&&classes.like} onClick={handlelike}/>
        </IconButton>
        {countlike}
        </div>
        <IconButton square
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
        {comments.map((item)=>{
          return (<Comment data={item}/>);
        })}  
        </CardContent>
        <InputBase placeholder="comments" value={comment} onChange={(e)=>setComment(e.target.value)} placeholder="Put Your comment"></InputBase>
        <Button onClick={Add}>add</Button>
      </Collapse>  </Card>  
        </>
    )
}
export default Post;