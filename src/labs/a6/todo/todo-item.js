const TodoItem = (
    {
      todo = {
        id: 1,
        done: true,
        title: 'Buy milk',
        status: 'COMPLETED'
      }
    }) => {
  return (
      <li id={todo.id}>
        <input type="checkbox"
               defaultChecked={todo.done}/>
        {todo.title}
        ({todo.status})
      </li>
  );
}
export default TodoItem;