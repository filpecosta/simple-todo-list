import React from 'react'

export default function Todo({ todo, toggleComplete }) {
  function handleTodoClick() {
    toggleComplete(todo.id)
  }
  return (
    <div className='m-3'>
      <label className='flex '>
        <div>
          <input className='min-w-full w-6 h-6' type={"checkbox"} checked={todo.complete} onChange={handleTodoClick} />
        </div>
        <p className='pl-2'>
          {todo.name}
        </p>
      </label>
    </div>
  )
}
