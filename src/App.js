import React, {Component} from 'react';

import './App.css';
import ToDo from './Todo/Todo';

import InputValidation from './InputValidation/InputValidation';

import Char from './Char/Char';

class App extends Component {

  state = {
    todos : [
      { id: 1, title: "Go to City", user: "Udith", date: "27/09/2019"},
      { id: 2, title: "Go Jogging", user: "Nalaka", date: "Daily @ 5pm"}
    ],
    user : "Udith Nalaka",
    showTodos : false,
    textValue : ""
  }

  

  changeTaskHandler = (newTtile) => {
    //console.log("Clicked");

    this.setState({todos : [
        { id:1, title: newTtile, user: "Udith", date: "28/09/2019"},
        { id:2, title: "Go Jogging", user: "Udith", date: "Daily @ 5pm"}       
      ]
    })
  }

  changeUserHandler = (event, id) => {

    const todoIndex = this.state.todos.findIndex(t => {
      return t.id === id;
    });

    const todoTask = {...this.state.todos[todoIndex]};

    todoTask.name = event.target.value;

    const todos = [...this.state.todos];
    todos[todoIndex] = todoTask;

    this.setState({todos: todos});
    
  }

  toggleToDoHandler = () => {
    let showTodo = this.state.showTodos;

    this.setState(
        { showTodos : !showTodo }
      )
    
  }

  deleteTodoHandler = (todoIndex) => {
     //const todos = this.state.todos.slice(); // this will copy the original todos array.
     const todos = [...this.state.todos]; //slice operator. behaviour is similar to obove line.
     todos.splice(todoIndex, 1);
     this.setState({todos: todos});
  }

  displayTextChangeHandler = (event) => {
    this.setState({textValue : event.target.value})
  }

  
  render () {
    
    const style = {
        backgroundColor: 'blue',
        color: 'white',
        font: 'inherit',
        border: '1px solid black',
        padding: '8px',
        cursor: 'pointer',
        ':hover': { //this is a scudo selector. need radium 3rd party lib to work
          backgroundColor: 'red',
          color: 'black'
        }
    };

    let todos = null;

    if (this.state.showTodos) {
        todos = (
          <div>
            {this.state.todos.map((todo, index) => {
                return <ToDo
                key={todo.id}
                title={todo.title} 
                user={todo.user} 
                date={todo.date}
                click={this.deleteTodoHandler.bind(this,index)}
                changed={(event) => this.changeUserHandler(event, todo.id)} />
            })}
          </div>
        )
    }

    const char = this.state.textValue.split('').map(char => {
      return <Char character={char} />
    });
  
    return (

        <div className="App">
          <h1>React App</h1>
          <p>Logged user : {this.state.user}</p>

          {todos}

          <button className = "ToggleButton" onClick={this.changeTaskHandler.bind(this, null)}>Switch Todo</button>
          <button style={style} onClick={this.toggleToDoHandler}>Toggle ToDo List</button>


          <br/><br/>
          <input type="text" onChange={this.displayTextChangeHandler}></input>
          <p>User enetered : {this.state.textValue}</p>
          <InputValidation textLength={this.state.textValue.length}/>
          
          {char}
        </div>
    ); 
  }

}

export default App;
