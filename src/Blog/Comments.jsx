import { Button, CardContent, Card, Typography, TextareaAutosize, Grid } from '@material-ui/core';
import React, { Component } from 'react'

export default class Comments extends Component {
 constructor() {
  super();
  this.state = {
   comment: ''
  }
 }

 handlerTypedComment(e) {
  e.preventDefault();
  console.log(e.target.value);
  this.setState({
   comment: e.target.value
  })
 }
 render() {
  return (
   <React.Fragment>
    <Grid container spacing={12}>
     <Grid item xs={8}>
      <TextareaAutosize
       value={this.state.comment}
       onChange={(e) => this.handlerTypedComment(e)}
       aria-label="empty textarea" placeholder="Empty" />
     </Grid>

     <Grid item xs={4}>

      <Button variant="contained" color="primary" onClick={() => this.props.handlerComments(this.state.comment, this.props.id)}>
       Send
      </Button>

     </Grid>

     <Grid item xs={8}>
      {this.props.comments.map(comment => <Card>
       <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         {comment}
        </Typography>
       </CardContent>
      </Card>
      )}
     </Grid>
    </Grid>
   </React.Fragment>
  )
 }
}
