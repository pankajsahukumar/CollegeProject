import { Hidden, makeStyles} from '@material-ui/core'
import React from 'react'
import Leftside from '../Components/Leftside'
import Middle from '../Components/Middle'
import Rightbar from '../Components/Rightbar'
import Messanger from './Messanger'
const useStyles =makeStyles(theme=>({
    bt:{
      display:"flex",
    },
    topheader:{
      display:"flex",
      flexDirection:"column",
    }
 }));
 
export default function Home(props) {
    const classes = useStyles();
    const nishant =()=>{
return (
  <>
  <div className={classes.bt}>
      <Hidden smDown>
      <Leftside/>
      </Hidden>
      <Middle/>
      <Hidden smDown>
      <Rightbar/>
      </Hidden></div>   
      </>
)
    }
    return (
     <Messanger/>   
    )
}
