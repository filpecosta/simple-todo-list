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
    e.preventDefault()
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
    })
    todoNameRef.current.value = null
  }

  function toggleComplete(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleClearTodo(e) {
    e.preventDefault()
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <div className='container mx-auto pl-32 pr-32'>
      <h1 className='text-4xl mt-3 text-center'>To Do List</h1>
      <TodoList todos={todos} toggleComplete={toggleComplete} />
      <form className='inline'>
        <input className='max-w-sm mt-12 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' ref={todoNameRef} type={"text"} />
        <div className='flex justify-center'>
          <button className='bg-slate-300 rounded shadow p-3 m-4' type='submit' onClick={handleClickAdd}>Add Task</button>
          <button className='rounded shadow p-2 m-6' onClick={handleClearTodo}>Clear Complete Tasks</button>
        </div>
      </form>
      <div>{todos.filter(todo => !todo.complete).length} left To Do</div>
    </div>
  );
}

export default App;
