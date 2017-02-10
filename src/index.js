import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import CreateTodo from './components/create_todo'
import TodosList from './components/todos_list'
import TodoItem from './components/todo_item'



class App extends Component {
  constructor(props) {
    super(props);

    // this.state = { todos: [] }
    // var localTodos = [];
    // localTodos = JSON.parse(localStorage.getItem("todos"))
    // this.setState({ todos: localTodos })
  }

  render() {
    return (
      <div>
        <CreateTodo />
        <TodosList />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
