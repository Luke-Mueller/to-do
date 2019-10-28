import React from 'react';
import classes from './Form.module.css';

const form =(props) => {
  return (
    <form
      className={classes.FormContainer}
      action=""
      onSubmit={props.added}>
      <input type="text"
             className={classes.FormInput}
             placeholder='What are we doing today?'
             autoFocus/>
      <button className={classes.FormBtn}>Add Task</button>
    </form>
  )
};


export default React.memo(form);