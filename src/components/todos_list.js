import React, { Component } from 'react';
import TodoItem from './todo_item'

const TodosList = (props) => {
  // const todoItems = props.todos.map((todo) => {
  //   return <TodoItem todos={todo} />
  // })

  return (
    <section className="todo-list-section">
      <h1>To-Do List</h1>
      <button type="button" className="update-list" >Update List</button>
    </section>
  )
}

export default TodosList
