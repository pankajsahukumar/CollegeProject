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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
  const [expanded, setExpanded] = React.useState(false);
  const [comments,setComments]=useState([]);
  const [comment,setComment]=useState('');
 const [isLike, setisLike] = useState(false);
//  useEffect(() => {
   
//  }, [comments]);
//  
 const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log(comment);
  const Add =()=>{
      setComments((prev)=>[...prev,{"comment":comment}]);
      setComment('');
      console.log(comments);
  }
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon onClick={()=>props.delete(props.id)}/>
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon className={isLike&&classes.like} onClick={()=>setisLike(!isLike)}/>
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
        {comments.map((item)=>{
          return (<Comment data={item}/>);
        })}  
        </CardContent>
        <InputBase placeholder="comments" value={comment} onChange={(e)=>setComment(e.target.value)} placeholder="Put Your comment"></InputBase>
        <Button onClick={Add}>add</Button>
      </Collapse>
    </Card>
  );
}
