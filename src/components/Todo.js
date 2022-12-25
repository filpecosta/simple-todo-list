import React from 'react'

export default function Todo({ todo, toggleComplete }) {
  function handleTodoClick() {
    toggleComplete(todo.id)
  }
  return (
    <div className='m-3'>
      <label className='flex '>
        <input className='w-6 h-6' type={"checkbox"} checked={todo.complete} onChange={handleTodoClick} />
        <p className='pl-2'>
          {todo.name}
        </p>
      </label>
    </div>
  )
}
