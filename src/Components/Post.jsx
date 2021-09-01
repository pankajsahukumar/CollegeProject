import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { LocalActivity } from '@material-ui/icons';
const useStyles = makeStyles(theme=>({
    cardaction:{
        width:"100%",
        display:"flex",
        justifyContent:"space-around"

    },
    card:{
        margin:theme.spacing(2),
    }
    ,
    toplist:{
        display:"flex",
        justifyContent:"space-between",
    }
}))
export default function Post() {
    const classes=useStyles();
    return (
        <>
          <Card className={classes.card}> <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon/>
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      
      <CardContent>
        <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repellat error, fugit omnis nesciunt consectetur velit doloribus modi culpa tenetur fugiat. Commodi sint possimus quo iste nostrum soluta voluptates labore.</Typography>
                </CardContent>
      <CardMedia 
      image="https://www.pexels.com/photo/person-wearing-white-dress-shirt-1181725/" style={{height:"200px"}}/>
      <CardContent style={{width:"100%"}}>
          <IconButton>
              <LocalActivity/>
          </IconButton>
          
          <IconButton>
              <LocalActivity/>
          </IconButton>
          
          <IconButton style={{float:"right",marginRight:"10px"}}>
              <LocalActivity/>
          </IconButton>
      </CardContent>
        </Card>  
        </>
    )
}
