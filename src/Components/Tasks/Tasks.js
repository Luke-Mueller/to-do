import React, {Component} from 'react';

import classes from './Tasks.module.css';

class Tasks extends Component {

  render() {

    const tasks = this.props.taskList.map((task, i) => {
      let style;
      if(task.priority === 'high') style = { backgroundColor: 'rgb(255, 192, 203)' };
      if(task.priority === 'medium') style = { backgroundColor: 'rgb(252, 252, 167)' };
      if(task.priority === 'low') style = { backgroundColor: 'rgb(209, 253, 121)' };

      return (
          <div key={i} style={style} className={classes.TaskDiv}>
            <li className={classes.TaskLi}>{task.input}</li>
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

