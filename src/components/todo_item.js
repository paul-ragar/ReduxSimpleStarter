import React, { Component } from 'react'

class TodoItem extends Component {
  render() {
    return (
      <div className="list-item-wrapper">
        <div className="todo-title-bar">
          <p ></p>
          <input  type="text" name="name" value="" />
          <p className="fa-pencil" >Done</p>
        </div>
        <div className="todo-desc-container">
          <input type="checkbox" className="todo-checkbox" />
          <label className="todo-checkbox-label"></label>
          <p></p>
          <input type="text" name="name" value="" />
        </div>
      </div>
    )
  }
}

export default TodoItem
