import { Card, CardActions, CardContent, CardHeader, CardMedia, Divider, IconButton, TextareaAutosize, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';

import React from 'react';
import Comments from './Comments';
const useStyles = makeStyles((theme) => ({

 media: {
  height: 0,
  paddingTop: '56.25%', // 16:9
 },
}));
const Post = (props) => {
 const classes = useStyles();

 return (
  <React.Fragment>
   <Card style={props.styles} key={props.data.id}>
    <CardHeader
     title={props.data.title}
     subheader={props.data.date}>

    </CardHeader>
    <CardMedia
     className={classes.media}
     image={props.data.imageUrl}>

    </CardMedia>
    <CardContent>
     <Typography variant="body2" color="textSecondary" component="p">
      {props.data.description}
     </Typography>
    </CardContent>
    <CardActions>
     <IconButton aria-label="add to favorites" >
      <FavoriteIcon onClick={props.handlerLikes} />
     </IconButton>
     <Typography>
      {props.data.likes}
     </Typography>
    </CardActions>

    <Divider />
    <Typography>
     Comments
    </Typography>

    <Comments id={props.data.id} comments={props.comments} handlerComments={props.handlerComments}></Comments>

   </Card>

  </React.Fragment>
 );
}

export default Post;
