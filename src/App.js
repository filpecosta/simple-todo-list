import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const todoNameRef = useRef()
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    console.log("🚀 ~ file: App.js:14 ~ useEffect ~ storedTodos", storedTodos)
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleClickAdd(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4, name: name, complete: false }]
    })
    todoNameRef.current.value = null
  }

  function toggleComplete(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  return (
    <>
      <TodoList todos={todos} toggleComplete={toggleComplete} />
      <input ref={todoNameRef} type={"text"} />
      <button onClick={handleClickAdd}>Add</button>
      <button>Clear Complete Tasks</button>
      <div>0 left To Do</div>
    </>
  );
}

export default App;
