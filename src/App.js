import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const deleteTodo = (todo) => {
    const copyTodos = [...todos];
    const indexOfTodoItem = copyTodos.findIndex(t => t === todo);
    copyTodos.splice(indexOfTodoItem, 1);
    setTodos(copyTodos);
  }
  
  return (
    <>
      <h1>Todo List</h1>
      <TodoForm setTodos={setTodos} todos={todos}/>
      <TodoList todoItems={todos} deleteTodo={deleteTodo} />
      <TodoList todoItems={todos} deleteTodo={() => console.log('hit here')} />
    </>
  );
}

export default App;
