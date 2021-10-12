import { Avatar, Container, makeStyles, Paper} from '@material-ui/core'
import React from 'react'
const useStyles =makeStyles(theme=>({
    container:{
        marginTop:theme.spacing(2),
        marginBottom:theme.spacing(2),
},
wrapper:{
display:"flex",
flexDirection:props=>props.show===true?"row":"row-reverse",
},
    paper:{
        padding:theme.spacing(1),
        backgroundColor:props=>props.show?"blue":"white",
        color:props=>props.show?"white":"black",
        width:"70%",
        minWidth:'50px',
        marginLeft:theme.spacing(2),
        marginRight:theme.spacing(2),
        maxWidth:"max-content",
        borderRadius:"10px 10px 0px 10px",
        position:"relative",
    },
    time:{
        position:"absolute",
        bottom:0,
        right:0,
        color:"black",
        fontSize:"10px",
        paddingRight:theme.spacing(1),
    }
}));
export default function Chat(props) {
    const classes = useStyles(props);
    return (
        <>
        <Container className={classes.container}>
       <div className={classes.wrapper}>
        <Avatar></Avatar>
          <Paper className={classes.paper} square>
             {props.msg?.message}
              <span className={classes.time}>9:40Pm</span>
          </Paper>  
          </div>
          </Container>
        </>
    )
}
