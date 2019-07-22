import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import { white } from 'ansi-colors';

class App extends Component {
  state = {
    persons: [
      { id: 'rofn', name: 'Max', age: 28 },
      { id: 'q0ie', name: 'Manu', age: 31 },
      { id: 'vdsd', name: 'Sarah', age: 26 },
    ], 
    otherState: 'some other value',
    showPersons: false
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; 
    persons.splice(personIndex, 1); 
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState({ persons: persons });
  }

  render() {
    const style = {
      backgroundColor: 'green', 
      color: 'white',
      font: 'inherit', 
      border: '1px', 
      padding: '8px', 
      cursor: 'pointer'
    }

    let persons = null; 

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id} 
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      )

      style.backgroundColor = 'red'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
} 

export default App;