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
      <select className={classes.FormSelect} name='priority'>
        <option value=''>Priority</option>
        <option value='high'>High</option>
        <option value='medium'>Medium</option>
        <option value='low'>Low</option>
      </select>
      <button className={classes.FormBtn} type='submit'>Add Task</button>
    </form>
  )
};


export default React.memo(form);