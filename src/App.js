import './App.css';
import React, { useState, useRef } from 'react';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const todoNameRef = useRef()
  console.log("🚀 ~ file: App.js:7 ~ App ~ todoNameRef", todoNameRef)
  const [todos, setTodos] = useState([])

  function handleClickAdd(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    console.log('Todo:', name)
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4, name: name, complete: false }]
    })
    todoNameRef.current.value = null
  }
  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type={"text"} />
      <button onClick={handleClickAdd}>Add</button>
      <button>Clear Complete Tasks</button>
      <div>0 left To Do</div>
    </>
  );
}

export default App;
