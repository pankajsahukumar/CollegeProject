import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { publicRequest } from '../redux2/requestMethods';
import { login } from '../redux2/apiCalls/userapi';
import { useDispatch } from 'react-redux';

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
  const handleSubmit =(e)=>{
 e.preventDefault();
 const user={email,password};
   login(dispatch,user);
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