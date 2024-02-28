import { useState } from "react";

export const TodoForm = (props) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    props.setTodos([...props.todos, text]);
    setText('')
  }

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};
