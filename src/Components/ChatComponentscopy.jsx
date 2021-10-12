import { Paper,List,makeStyles, InputBase, TextareaAutosize, Hidden, Avatar, Button } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { publicRequest } from '../redux2/requestMethods';
import Chat from './Chat';
import Leftside from './Leftside';
import Chatleft from './Chatleft'
import { io } from 'socket.io-client';
import { grey } from '@material-ui/core/colors';
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
    backgroundColor:grey[300],
    alignItems:"center"
    
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
export const ChatComponentscopy = () => {
    const classes = useStyles();
    const [msg, setMsg] = useState("");
    const [Megs, setMegs] = useState([]);
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
     const [messages,setMessages]=useState({});
     const [newchat, setNewchat] = useState({sender:"test",text:"test"});
     const [onlineUsers,setOnlineUsers] = useState([]);
     const scrollRef = useRef();
     const socket =useRef(null);
    const state = useSelector(state => state.user2.currentUser);
    const startchat=(data)=>{
     setCurrentChat(data);
    }


    useEffect(()=>{
        socket.current=io("ws://localhost:9000");
        socket.current.on("getMessage",(data)=>{ 
            const message=data.text;
            const sender=data.senderId;
            setNewchat({
                sender,
                message
            });
            setNewchat({
                sender,
                message
            });
        }); 
    },[]);
    useEffect(()=>{
        console.log(newchat);
    },[newchat]);
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
    }, [state.user._id]);


//     useEffect(()=>{
//         socket.current.on("getMessage",(data)=>{ 
//         const message=data.text;
//         const sender=data.senderId;
//         setNewchat({
//             sender,
//             message
//         });
//         console.log(newchat);
//     });
// },[]);


const scrollToBottom = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [Megs]);


    useEffect(() => {
        const allchat=async()=>{
            try{
        const res=await publicRequest.get('Chat/'+currentChat?._id);
        setMegs(res.data);
        }catch(err){
            console.log(err);
        }}
        allchat();
    }, [currentChat]);
    
    const apend =async(e)=>{
        e.preventDefault();
        if(msg==='')
        return;
      const data={ConversationId:currentChat,
      SenderId:state.user._id,
      message:msg};
    const receiverId = currentChat.members.find(member=> member!==state.user._id);
    socket.current.emit("sendMessage",{senderId:state.user._id,receiverId:receiverId,text:msg});
    try{
        const res=await publicRequest.post('Chat',data);
        setMegs([...Megs,res.data]);
        setMsg('');
    }catch(err){
        console.log(err);
    }
    }


     
     useEffect(()=>{
    socket.current.emit("adduser",state.user._id);
    //  socket.current.on("getUsers",(users)=>{
        //  setOnlineUsers(users?.some((u)=>{conversations.members.includes(u.userId)}));
    //   });
    },[state.user._id])

    useEffect(()=>{
        newchat&&currentChat?.members.includes(newchat.sender)&&setMegs(prev=>[...prev,newchat]);
    },[newchat,currentChat]);
    
     
     useEffect(()=>{
     scrollRef.current?.scrollIntoView({behavior :"smooth"});
     },[msg])

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
          (<><Paper className={classes.paper} square>
              {Megs.map((item)=>{
                  {
                  return(<Chat show={item.SenderId!==state.user._id} msg={item}/>)
                  }
              })}
              <div ref={scrollRef} />
         </Paper>
         <Paper className={classes.paper2} square> 
         <TextareaAutosize aria-label="minimum height" value={msg} onChange={(e)=>setMsg(e.target.value)} minRows={1} maxRows={2} className={classes.texarea} placeholder="Minimum 3 rows" /> 
         <Button color="primary" size="large" variant="contained" onClick={apend}>send</Button></Paper></>) :(<span>Nothing to display</span>)}
         </div>
        </div>
    )
}
