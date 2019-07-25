import React, { useEffect } from 'react'

import classes from './Cockpit.css'

const cockpit = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
  })

  const assignedClasses = [];
  let btnClass = '';
  btnClass = classes.Red;
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cocktpit}>
      <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button 
          className={btnClass}
          onClick={props.clicked}>Switch Name</button>
    </div>
  );
}
export default cockpit;