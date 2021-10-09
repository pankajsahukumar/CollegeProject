import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { login} from '../redux2/apiCalls/userapi';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import {toast} from 'react-toastify'; 
  
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css'; 
import { loginuser, update } from '../redux2/Slices/userSlice';
  
toast.configure()
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  // create state variables for each input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history= useHistory();
  const islogin=useSelector(state => state.user2.islogin);
  const handleSubmit =(e)=>{
 e.preventDefault();
 const user={email,password};
     login(dispatch,user);
   if(islogin){
     toast.success("Successfully");
     history.push('/home');
   }else{
     toast.error("error");
   }
    }
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>

    </form>
  );
};

export default LoginForm;