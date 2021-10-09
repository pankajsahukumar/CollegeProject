import { Avatar, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Paper } from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles(theme=>({
    right:{
        flex:3,
    },
    paper:{
        width:"125px",
        height:"150px",
        maxHeight:"150px",
    }
}))
export default function Rightbar() {
    const classes = useStyles();
    const array=[1,2,3,4,5];
    return (
        <div className={classes.right}>
            <div style={{display:"flex",
            flexWrap:"wrap",
            gap:"5px",}}>
                {array.map(item=>{
                return (<Paper className={classes.paper} key={item}>
                    <img src="#" alt={item} style={{width:"100%",height:"100%"}}></img>
                </Paper>);    
                })}
            
            
            </div>
            <List>
                <ListItem>
                <ListItemAvatar>
                    <Avatar>N</Avatar>
                </ListItemAvatar>
                <ListItemText primary="Nishant"></ListItemText>
                </ListItem>
            </List>
        </div>
    )
}
