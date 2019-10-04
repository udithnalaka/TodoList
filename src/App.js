import React, {Component} from 'react';

import classes from './App.css';
import ToDo from './Todo/Todo';

import InputValidation from './InputValidation/InputValidation';

import Char from './Char/Char';

import ErrorBoundry from './ErrorBoundry/ErrorBoundry';

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

    //geenrating a random error for error handling purpose
    // const random = Math.random();
    // if (random >0.7) {
    //   throw new Error('Throw Error');
    // }
    
    let todos = null;

    if (this.state.showTodos) {
        todos = (
          <div>
            {this.state.todos.map((todo, index) => {
                return ( 
                // ErrorBoundry is called a higher end component, because it wraps other components.
                //<ErrorBoundry key={todo.id}> 
                  <ToDo
                    title={todo.title} 
                    user={todo.user} 
                    date={todo.date}
                    click={this.deleteTodoHandler.bind(this,index)}
                    changed={(event) => this.changeUserHandler(event, todo.id)} />
                //</ErrorBoundry>
                )
            })}
          </div>
        )
    }

    const char = this.state.textValue.split('').map(char => {
      return <Char character={char} />
    });
  
    return (

        <div className={classes.App}>
          <h1>React App</h1>
          <p>Logged user : {this.state.user}</p>

          {todos}

          <button className = {classes.ToggleButton} onClick={this.changeTaskHandler.bind(this, null)}>Switch Todo</button>
          <button className = {classes.App.Red} onClick={this.toggleToDoHandler}>Toggle ToDo List</button>


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
