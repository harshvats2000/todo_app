import React, { Component } from "react";

class App extends Component {

    state = {
        todo: "",
        todos: []
    }

    addTodo = () => {
        if(this.state.todo === "")
        {
            alert("Please enter something.")
        }

        else
        {
        this.state.todos.push(this.state.todo);

        this.setState({
            todo: ""
        });
        }
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
        if(code === 13) {
            this.addTodo();
        }
    }

    numofList = () => {
        return (<span>{ this.state.todos.length }</span>)
    }

    render() {
        return (
            <div className="todoList">
             <div className="header ">

              <h1>{this.numofList()} Todos </h1>

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

                          <li title="click to delete" onClick={e => this.delet(index)}>{ todo }</li>

                      </div>
                  ))}

              </ol>
            </div>
        )
    }
}

export default App;