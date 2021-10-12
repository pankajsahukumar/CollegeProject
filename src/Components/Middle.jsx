import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core';
import { InsertPhoto } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import {useSelector } from 'react-redux';
import { publicRequest } from '../redux2/requestMethods';
import Post2 from './Post2';
import Post from './Post';
const useStyles = makeStyles(theme=>({
    Middle:{
        flex:6,
    },
    textfield:{
      width:"100%",
    },
    box:{
      display:props=>!props.show&&"none"
    }
}))

const style = {
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };
export default function Middle(props) {
  const classes = useStyles(props);
 const [file,setFile]=useState(null);
 const [allposts,setAllposts]=useState([]);
 const state=useSelector(state=>state.user2.currentUser);
 const [postdes,setPostdes]=useState('');
 const ondelete=(id)=>{
  console.log(id);
  const deletepost=async()=>{
    await publicRequest.delete(`post/${id}`,
    {data: {
      userId: state.user._id
    }});
   setAllposts((prev)=>[...prev.filter(item=> item._id!==id)]);
  }
  deletepost();
}
 useEffect(()=>{
   const getpost=async()=>{
    const res= await publicRequest.get(`/post/${state.user._id}/allpost`);
    
    setAllposts(res.data.sort((a,b)=>{
      return new Date(a.createdAt)-new Date(b.createdAt);
    }));
   }
   getpost();
 },[state.user._id]);
 const handleform=(e)=>{
    e.preventDefault();
    if(postdes==='')
    return;
    const submitdata=async()=>{
       let imgurl; 
      if(file){
          try{
            const data=new FormData();
            const filename=Date.now()+file.name;
            data.append("name",filename);
            data.append("file",file);
            imgurl=filename;
            await publicRequest.post('/api/upload',data,
            {headers: {
              "Content-Type": "multipart/form-data"
            }});
        }catch(err){console.log(err);}
        }


      try{
        
    const prev={"postdes":postdes,"userId":state.user._id,"imgurl":imgurl};
         const res=await publicRequest.post('/post/createpost',prev);
         setAllposts((prev)=>[...prev,res.data]);
      }catch(err){
        console.log(err);
      }
    setPostdes('');
    }
    submitdata();
  }

    return (
        <div className={classes.Middle} style={{alignItems:"center"}}>
            
         <Box sx={style} className={classes.box}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create your Post
          </Typography>
          <div>
        <input type="file" name="file" id="file" accept='.png,.jpeg,.jpg' class="inputfile" style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])}/>
       <label htmlFor="file">
    <InsertPhoto/> choose a photo</label>
    </div>
    <TextField
           id="outlined-multiline-static"
           label="Descriptions"
           multiline
           rows={4}
           className={classes.textfield}
          value={postdes}
          onChange={(e)=>{setPostdes(e.target.value)}}
        />
          
          <div>
          <Button variant="contained" color="success" onClick={handleform} style={{marginTop:"20px",backgroundColor:'green',color:"white"}}>
  Share
</Button>
          </div>
        </Box>
        {props.show&&allposts?.map(data=>{
            return (<Post2 data={data} key={data._id} delete={ondelete}/>)
        })}
        {!props.show&&allposts?.map(data=>{
            return (<Post info={data} key={data._id} />)
        })}
        
        </div>
    )
}
