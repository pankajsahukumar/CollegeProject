import { Paper,makeStyles, InputBase, TextareaAutosize, Hidden, Avatar } from '@material-ui/core'
import React from 'react'
import Chat from './Chat';
import Leftside from './Leftside';
const useStyles = makeStyles(theme=>({
    container:{
    display:"flex",
    },
    texarea:{
    width:"80%",
    marginLeft:theme.spacing(2),
    marginRight:theme.spacing(2),
     fontSize:"18px",
     border:"none",
     borderRadius:"25px",
     outline:"none",
    padding:"8px 12px 12px 8px",
    },
    chatareawrappper:{
        flex:7,
    },
paper:{
    height:`calc(100vh - 135px)`,
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    overflow:"auto"
},
paper2:{
    display:"flex",
    height:"65px",
    maxHeight:'auto',
    backgroundColor:"black",
    justifyItems:"center",
}
}));
export const ChatComponents = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
        <Hidden smDown>
         <Leftside/>
        </Hidden>
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
         <Paper className={classes.paper2} square> 
         <TextareaAutosize aria-label="minimum height" minRows={1} maxRows={2} className={classes.texarea} placeholder="Minimum 3 rows" /> 
         <Avatar/></Paper> </div>
        </div>
    )
}
