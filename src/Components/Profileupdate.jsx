import {  Button,  InputLabel, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import { AddAPhoto } from '@material-ui/icons';
import React,{useState} from 'react'
import Leftside from './Leftside';
const useStyles=makeStyles(theme=>({
     div:{
         display:"flex",
     },
    card:{
      flex:8,
  },
  media:{
      width:"100%",
      height:"250px",
  },
  textfield:{
      width:"90%",
      fontSize:"20px",
  },
  group:{
      padding:theme.spacing(2),
      marginTop:theme.spacing(2),
  },
  btn:{
      backgroundColor:'green',
      color:"white",
  },
  image:{
      width:'100px',
      height:"100px",
  }
}));
export default function Profileupdate() {
    const classes=useStyles();
    const [file, setFile] = useState(null);
    
    const [file2, setFile2] = useState(null);
    console.log(file);
    return (
        <div className={classes.div}>
            <Leftside/>
            <Paper elevation={3} className={classes.card}>
          <Typography component="h2" variant="h6" align="center">
            How are you
          </Typography>
          
        <div className={classes.group}>
            
          {file&&(<img className={classes.image} src={URL.createObjectURL(file)} alt=""/>)}
        <InputLabel htmlFor="file"><AddAPhoto/>Profile pic</InputLabel>
        {file2&&(<img className={classes.image} src={URL.createObjectURL(file2)} alt=""/>)}
        <InputLabel htmlFor="file2"><AddAPhoto/>Cover photo</InputLabel>
        <TextField type="file" onChange={(e)=>setFile(e.target.files[0])}
         className={classes.textfield} id="file" style={{display:"none"}}></TextField>
         
        <TextField type="file" onChange={(e)=>setFile2(e.target.files[0])}
         className={classes.textfield} id="file2" style={{display:"none"}}></TextField>
        </div>
          <div className={classes.group}>
        <InputLabel htmlFor="UserName">UserName</InputLabel>
        <TextField className={classes.textfield}></TextField>
        </div>
        <div className={classes.group}>
        <InputLabel htmlFor="UserName">UserName</InputLabel>
        <TextField className={classes.textfield}></TextField>
        </div>
       <Button align="center" className={classes.btn} size="large">Update Profile</Button> 
    </Paper>
    </div>
    )
}
