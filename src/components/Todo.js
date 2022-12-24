import React from 'react'

export default function Todo({ todo, toggleComplete }) {
  function handleTodoClick() {
    toggleComplete(todo.id)
  }
  return (
    <div>
      <label>
        <input type={"checkbox"} checked={todo.complete} onChange={handleTodoClick} />
        {todo.name}
      </label>
    </div>
  )
}
