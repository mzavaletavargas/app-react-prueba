import TodoItem from './TodoItem';
import React from 'react';
export default (props) => {
 return <React.Fragment>
  {props.list.map((item) => <TodoItem task={item.task}></TodoItem>)}
 </React.Fragment>
}