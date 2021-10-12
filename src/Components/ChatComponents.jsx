import { Paper,List,makeStyles,TextareaAutosize, Hidden, Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { publicRequest } from '../redux2/requestMethods';
import Chat from './Chat';
import Chatleft from './Chatleft'
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
    backgroundColor:"white",
    justifyItems:"center",
}, left:{
    flex:"3",
    position:"sticky",
    top:0,
    left:0,
    height:`calc(100vh - 70px)`,
    backgroundColor:theme.palette.background.paper,
    overflow:"auto",
    maxHeight: `calc(100vh - 70px)`,
}
}));
export const ChatComponents = () => {
    const classes = useStyles();
    const [msg, setMsg] = useState("");
    const [Megs, setMegs] = useState([]);
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const state = useSelector(state => state.user2.currentUser);
    const startchat=(id)=>{
     setCurrentChat(id);
    }
    useEffect(() => {
        const getconversation=async()=>{
            try{
        console.log(state._id)
        const res=await publicRequest.get('coversation/'+state.user._id);
        console.log(res.data);
        setConversations(res.data);
        }catch(err){
            console.log(err);
        }}
        getconversation();
    }, []);
    useEffect(() => {
        const allchat=async()=>{
            try{
        const res=await publicRequest.get('Chat/'+currentChat);
        setMegs(res.data);
        }catch(err){
            console.log(err);
        }}
        allchat();
    }, [currentChat]);
    
    const apend =async()=>{
        setMegs((prev)=>[...prev,msg]);
      const data={ConversationId:currentChat,
      SenderId:state.user._id,
      message:msg};
       try{
           const res=await publicRequest.post('Chat',data);
           console.log(res.data);
       }catch(err){
           console.log(err);
       }
    }
    return (
        <div className={classes.container}>
        <div className={classes.left}>
        <Hidden smDown>
            <List>
            {conversations.map((item)=>{
                return (<Chatleft conv={item} start={startchat} key={item._id} currentUser={state.user}/>)
            })}
            </List> 
        </Hidden>
        </div>
        <div className={classes.chatareawrappper}>
            {currentChat?
          (<><Paper className={classes.paper}>
              {Megs.map((item)=>{
                  return(<Chat show={state.user._id} msg={item}/>)
              })}
         </Paper>
         <Paper  square> 
         <TextareaAutosize aria-label="minimum height" value={msg} onChange={(e)=>setMsg(e.target.value)} minRows={1} maxRows={2} className={classes.texarea} placeholder="Minimum 3 rows" /> 
         <Button color="primary" onClick={apend}>send</Button></Paper></>) :(<span>Nothing to display</span>)}
         </div>
        </div>
    )
}
