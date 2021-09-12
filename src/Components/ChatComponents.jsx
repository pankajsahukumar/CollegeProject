import { Paper,makeStyles, InputBase, TextareaAutosize } from '@material-ui/core'
import React from 'react'
import Chat from './Chat';
import Leftside from './Leftside';
const useStyles = makeStyles(theme=>({
    container:{
    display:"flex",
    },
    texarea:{width:"80%",
    marginLeft:theme.spacing(2),
    marginRight:theme.spacing(2),
fontSize:"20px",},
    chatareawrappper:{
        flex:7,
    },
paper:{
    height:"80vh",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    overflow:"auto"
}
}));
export const ChatComponents = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
        <Leftside/>
        <div className={classes.chatareawrappper}>
          <Paper className={classes.paper}>
              
              <Chat show={false}/>
              <Chat show={true}/>
              <Chat show={false}/>
              <Chat show={true}/>
              <Chat show={false}/>
              <Chat show={true}/>
              <Chat show={false}/>
              <Chat show={true}/>
              <Chat show={false}/>
              <Chat show={true}/>
              <Chat show={false}/>
              <Chat show={true}/>
         </Paper> 
         <TextareaAutosize aria-label="minimum height" minRows={1} className={classes.texarea} placeholder="Minimum 3 rows" /> 
         </div>
        </div>
    )
}
