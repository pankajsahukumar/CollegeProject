import React, { useState } from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { publicRequest } from '../redux2/requestMethods';

const useStyles = makeStyles(theme => ({
  paper:{
      display:'flex',    
      width:'350px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
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

const Form = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Fname,setFname]=useState('');
  const [values, setValues] = useState({});
  const handleonchange=(e)=>{
  setValues((values)=>({...values,[e.target.name]:e.target.value}));
  console.log(values);
  }
  const handleSubmit = e => {
    e.preventDefault();
    const user={email,password};
const registeruser=async(user)=>{
    const res =await publicRequest.post('Auth/register',user);
    console.log(res.data);
    return res.data;
}
  registeruser(user);
  };

  return (
      <Paper className={classes.paper}>
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        variant="filled"
        type="text"
        name="fname"
        required
        value={values.fname||""}
        onChange={handleonchange}
      />
      <TextField
        label="Last Name"
        variant="filled"
        type="text"
        name="lname"
        required
        value={values.lname||""}
        onChange={handleonchange}
      />
      <TextField
        label="Email"
        variant="filled"
        type="email"
        name="firstname"
        required
        value={values.email||""}
        onChange={handleonchange}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        name="password"
        required
        value={values.password||""}
        onChange={handleonchange}
      />
      <TextField
        label="Confirm Password"
        variant="filled"
        type="password"
        name="cpassword"
        required
        value={values.cpassword||""}
        onChange={handleonchange}
      />
      <div>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>

      </div>
    </form>
    </Paper>
  );
};

export default Form;