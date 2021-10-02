import { Avatar, Container, makeStyles, Paper} from '@material-ui/core'
import React from 'react'
const useStyles =makeStyles(theme=>({
    container:{
        marginTop:theme.spacing(2),
    },
wrapper:{
display:"flex",
flexDirection:props=>props.show==true?"row":"row-reverse",
},
    paper:{
        padding:theme.spacing(1),
        backgroundColor:props=>props.show?"blue":"white",
        color:props=>props.show?"white":"black",
        width:"70%",
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
        <Avatar>A</Avatar>
          <Paper className={classes.paper} square>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure molestias non! Vitae in porro praesentium culpa expedita! At cumque voluptas commodi libero non reiciendis voluptates, rerum quisquam maxime aspernatur vitae molestiae beatae est pariatur placeat illo dolores. Facere, culpa inventore ratione, delectus maiores aliquam vel deserunt a vero, esse eveniet beatae. Quam mollitia sapiente et, nisi libero aspernatur ratione facilis suscipit optio? Vel itaque at natus quasi voluptas delectus magnam distinctio architecto commodi eius ratione debitis velit provident soluta pariatur exercitationem vero, ut incidunt cumque mollitia sit dolor? Quasi quo ipsam corrupti. Nobis cum impedit magnam hic, mollitia modi!
          <span className={classes.time}>9:40Pm</span>
          </Paper>  
          </div>
          </Container>
        </>
    )
}
