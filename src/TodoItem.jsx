const TodoItem = (props) => {
 return <div>
  <input type="checkbox" /> <span>{props.task}</span>
 </div>
}
export default TodoItem;
