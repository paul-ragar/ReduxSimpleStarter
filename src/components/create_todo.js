import React, { Component } from 'react'


class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo_title: '',
      todo_description: ''
    };


  }
  render() {
    return (
      <section className="todo-section">
        <h1>Create New To-Do</h1>
        <form method="post">
          <input className="input-todo-title" type="text" placeholder="To-Do Title..." onChange={(event) => this.setState({ todo_title: event.target.value })} />
          <textarea className="input-todo-desc" rows="2" type="text" placeholder="To-Do Description..." onChange={(event) => this.setState({ todo_description: event.target.value })} ></textarea>
          <button className="button-create-todo" type="button" name="button">Create</button>
        </form>
      </section>
    )
  }

}

export default CreateTodo;
