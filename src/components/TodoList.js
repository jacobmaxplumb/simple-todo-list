export const TodoList = (props) => {
  return (
    <ul>
      {props.todoItems.map((todo, index) => (
        <li onClick={() => props.deleteTodo(todo)} key={index}>
          {todo}
        </li>
      ))}
    </ul>
  );
};
