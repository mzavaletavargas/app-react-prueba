import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Post from './Post';
import SideBar from './SideBar';

export default class Main extends Component {

 constructor() {
  super();
  this.state = {
   blogs: {
    blog032321: {
     title: 'Hambuerguesa del mes',
     date: 'September 14, 2016',
     imageUrl: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg',
     likes: 0,
     comments: [],
     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    },
    blog032322: {
     title: 'Ceviche del mes',
     date: 'September 12, 2016',
     imageUrl: 'https://1.bp.blogspot.com/-hcyRsVM8cy4/XSkb1vjq6FI/AAAAAAAAS94/pHKY-BxEFJ8LhtXtoSkM-E1Dr6cA4vumgCLcBGAs/s1600/cebichedelenguado.jpg',
     likes: 0,
     comments: [],
     description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    }
   },
  }

 }

 handlerLikes(blogId) {
  const blogs = { ...this.state.blogs };
  blogs[blogId].likes = blogs[blogId].likes + 1;

  this.setState({
   blogs
  })
 }

 handlerComments(comment, blogId) {
  console.log(comment);
  const blogs = { ...this.state.blogs };

  blogs[blogId].comments.push(comment)
  this.setState({
   blogs
  })
 }
 render() {
  const data = Object.entries(this.state.blogs).map(([key, value]) => {
   return {
    id: key,
    ...value
   }
  })
  return (
   <React.Fragment>
    <Grid container spacing={3}>
     <Grid item xs={8}>
      {data.map((post) =>
       <Post
        key={post.id}
        data={post}
        handlerLikes={() => this.handlerLikes(post.id)}
        comments={post.comments}
        handlerComments={this.handlerComments.bind(this)}
        styles={{
         marginBotton: '10px'
        }}>

       </Post>)}
     </Grid>

     <Grid item xs={4}>
      <SideBar list={data.map((item) => {
       return {
        title: item.title,
        id: item.id
       }
      })}></SideBar>
     </Grid>
    </Grid>
   </React.Fragment >
  )
 }
}
