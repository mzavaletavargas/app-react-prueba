import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react';
import StarIcon from '@material-ui/icons/Star';

const SideBar = (props) => {
 return (
  <React.Fragment>
   <List component="nav" aria-label="contacts">
    {props.list.map((item) =>
     <ListItem button key={item.id}>
      <ListItemIcon>
       <StarIcon />
      </ListItemIcon>
      <ListItemText primary={item.title} />
     </ListItem>)}

   </List>
  </React.Fragment>
 );
}

export default SideBar;
