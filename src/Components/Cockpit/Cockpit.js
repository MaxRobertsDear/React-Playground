/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef, useContext } from 'react'

import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context'

const cockpit = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const toggleBtnRef = useRef(null)
  const authContext = useContext(AuthContext)
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    // Http request ...
    // setTimeout(() => {
      //   alert('Saved data to the cloud')
      // }, 1000)
    toggleBtnRef.current.click()
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
          ref={toggleBtnRef}
          className={btnClass}
          onClick={props.clicked}>
            Toggle Persons
        </button>
        <button onClick={authContext.login}>Log in</button>
    </div>
  );
}
export default React.memo(cockpit);