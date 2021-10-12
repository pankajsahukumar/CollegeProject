import { makeStyles, Typography } from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles';
import React from 'react'
const usestyles=makeStyles((theme)=>({
  title:{
    fontSize:"15px",
  },
  time:{
    fontSize:"10px",
  }
}
));
export default function Comment(props) {
  const classes =usestyles();

    return (
        <div>
            <Typography paragraph className={classes.title}>Pankaj<span className={classes.time}>10pm</span></Typography>
          <Typography variant="body2">
          {props.data.postmessage}
          </Typography>
          
        </div>
    )
}
