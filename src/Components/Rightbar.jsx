import { Avatar, List, ListItem, ListItemAvatar, ListItemText, makeStyles } from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles(theme=>({
    right:{
        flex:3,
    }
}))
export default function Rightbar() {
    const classes = useStyles();
    return (
        <div className={classes.right}>
            <List>
                <ListItem>
                <ListItemAvatar>
                    <Avatar>N</Avatar>
                </ListItemAvatar>
                </ListItem>
                
                <ListItem>
                <ListItemAvatar>
                    <Avatar>N</Avatar>
                </ListItemAvatar>
                <ListItemText primary="Nishant"></ListItemText>
                </ListItem>
                
                <ListItem>
                <ListItemAvatar>
                    <Avatar>N</Avatar>
                </ListItemAvatar>
                </ListItem>
                
                <ListItem>
                <ListItemAvatar>
                    <Avatar>N</Avatar>
                </ListItemAvatar>
                </ListItem>
                
                <ListItem>
                <ListItemAvatar>
                    <Avatar>N</Avatar>
                </ListItemAvatar>
                </ListItem>
            </List>
        </div>
    )
}
