import React, {Component} from 'react';

import classes from './Tasks.module.css';

class Tasks extends Component {

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.taskList !== this.props.taskList;
  // }

  render() {

    const tasks = this.props.taskList.map((task, i) => {
      return (
          <div key={i} className={classes.TaskDiv}>
            <li className={classes.TaskLi}>{task}</li>
            <button
              onClick={() => this.props.removed(i)}
              className={classes.RemoveBtn}/>
          </div>
      );
    });

    let style = {};
    if (this.props.taskList.length) {
      style = {
        border: '2px solid #b4b4b4'
      }
    }
    return (
      this.props.taskList !== []
        ? <ul style={style}>
            {tasks}
          </ul>
        : null
    )
  }
}

export default Tasks;

