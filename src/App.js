import React, {Component} from 'react';

import './App.css';
import ToDo from './Todo/Todo';

class App extends Component {

  state = {
    todos : [
      { title: "Go to City", user: "Udith", date: "27/09/2019"},
      { title: "Go Jogging", user: "Nalaka", date: "Daily @ 5pm"}
    ],
    user : "Udith Nalaka",
    showTodos : false
  }

  changeTaskHandler = (newTtile) => {
    //console.log("Clicked");

    this.setState({todos : [
        { title: newTtile, user: "Udith", date: "28/09/2019"},
        { title: "Go Jogging", user: "Udith", date: "Daily @ 5pm"}       
      ]
    })
  }

  changeUserHandler = (event) => {

    this.setState({todos : [
      { title: "Go to City", user: "Udith", date: "28/09/2019"},
      { title: "Go Jogging", user: event.target.value, date: "Daily @ 5pm"}       
    ]
  })
  }

  toggleToDoHandler = () => {
    let showTodo = this.state.showTodos;

    this.setState(
        { showTodos : !showTodo }
      )
    
  }

  
  render () {

    let todos = null;

    if (this.state.showTodos) {
        todos = (
          <div>
            <ToDo  
                title={this.state.todos[0].title} 
                user={this.state.todos[0].user}
                date={this.state.todos[0].date} />
            <ToDo 
                title={this.state.todos[1].title} 
                user={this.state.todos[1].user}
                date={this.state.todos[1].date}
                click={this.changeTaskHandler.bind(this, 'Go to sleep')}
                changed={this.changeUserHandler}/>
        </div>
        )
    }
  
    return (
      <div className="App">
        <h1>React App</h1>
        <p>Logged user : {this.state.user}</p>

       {todos}

        <button onClick={this.changeTaskHandler.bind(this, null)}>Switch Todo</button>

        <button onClick={this.toggleToDoHandler}>Toggle ToDo List</button>
      </div>
    ); 
  }

}

export default App;
