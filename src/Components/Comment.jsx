import { Typography } from '@material-ui/core'
import React from 'react'

export default function Comment(props) {
    return (
        <div>
            <Typography paragraph>Pankaj<span>10pm</span></Typography>
          <Typography paragraph>
            {props?.data.comment}
          </Typography>
          
        </div>
    )
}
