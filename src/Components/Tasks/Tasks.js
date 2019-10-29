import React, {Component} from 'react';

import classes from './Tasks.module.css';

class Tasks extends Component {

  render() {

    const tasks = this.props.taskList.map((task, i) => {
      // set div styles background color based on task.priority, high = pink, medium = yellow, low = green
      let style;
      if(task.priority === 'high') style = { backgroundColor: 'pink' };
      if(task.priority === 'medium') style = { backgroundColor: 'yellow' };
      if(task.priority === 'low') style = { backgroundColor: 'lawngreen' };

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

