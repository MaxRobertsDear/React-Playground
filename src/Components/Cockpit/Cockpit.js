import React, { useEffect } from 'react'

import classes from './Cockpit.css'

const cockpit = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    // Http request ...
    setTimeout(() => {
      alert('Saved data to the cloud')
    }, 1000)
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect')
    }
  }, [props.persons])

  const assignedClasses = [];
  let btnClass = '';
  btnClass = classes.Red;
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
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
export default React.memo(cockpit);