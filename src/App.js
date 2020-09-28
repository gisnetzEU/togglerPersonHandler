import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 23 },
      { name: 'Manu', age: 20 },
      { name: 'Minerva', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: 'Manu', age: 20 },
        { name: 'Minerva', age: 27 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 23 },
        { name: event.target.value, age: 20 },
        { name: 'Minerva', age: 27 }
      ]
    })
  }

  togglerPersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow})
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>My Component</h1>
        <p>Be happy!</p>
        <button
          style={style}
          onClick={this.togglerPersonHandler}>Toggle Persons</button>
        { 
          this.state.showPersons === true ?
          <div>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Max!')}
              changed={this.nameChangeHandler} >My Hobbies: Racing</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
          </div> : null
        }

      </div>
    );
  }

}

export default App;