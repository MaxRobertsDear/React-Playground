import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass'
import Aux from '../hoc/Aux'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor')
  }
  state = {
    persons: [
      { id: 'rofn', name: 'Max', age: 28 },
      { id: 'q0ie', name: 'Manu', age: 31 },
      { id: 'vdsd', name: 'Sarah', age: 26 },
    ], 
    otherState: 'some other value',
    showPersons: false, 
    showCockpit: true, 
    changeCounter: 0
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate')
    return true;
  }

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


    this.setState({ 
      persons: persons, 
      changeCounter: this.state.changeCounter + 1 
    });
  }

  
  render() {
    console.log('[App.js] render')
    let persons = null; 

    if (this.state.showPersons) {
      persons = (
      <Persons 
        persons={this.state.persons} 
        clicked={this.deletePersonHandler} 
        changed={this.nameChangedHandler} />
      )
    }
    


    return (
      <Aux>
        <button 
          onClick={() => {
            this.setState({ showCockpit: false })
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? <Cockpit 
        title={this.props.appTitle}
          showPersons={this.state.showPersons} 
          personsLength={this.state.persons.length} 
          clicked={this.togglePersonsHandler} 
        /> : null}
        {persons}
        </Aux>
      );
  }
}  

export default withClass(App, classes.App);