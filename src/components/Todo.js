import React, { Component } from "react";

class App extends Component {

    state = {
        todo: "",
        todos: []
    }

    addTodo = () => {
        const newTodo = this.state.todos;
        newTodo.push(this.state.todo);

        this.setState({
            todos: newTodo,
            todo: ""
        });
    }

    onChange = (e) => {
        this.setState({
            todo: e.target.value
        })
    }
    
    delet = (index) => {
        const newTodo = this.state.todos;
        newTodo.splice(index, 1);
        this.setState({
            todos: newTodo
        })
    }

    checkKey = (e) => {
        var code = e.keyCode || e.which;
        if(code == 13) {
            this.addTodo();
        }
    }

    render() {
        return (
            <div className="todoList">
             <div className="header">

              <h1>Todo List</h1>

              <input 
              placeholder="Enter note"
              value={this.state.todo}
              onChange={this.onChange}
              autofocus="autofocus"
              onKeyPress={this.checkKey}
              />

              <button onClick={this.addTodo}>add</button>
              </div>

              <ol className="theList">

                  {this.state.todos.map( (todo, index) => (
                      <div key={index}>

                          <li onClick={e => this.delet(index)}>{ todo }</li>

                      </div>
                  ))}

              </ol>
            </div>
        )
    }
}

export default App;