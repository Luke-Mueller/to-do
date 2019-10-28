import React, {Component} from 'react';

import './App.module.css';
import Tasks from '../Components/Tasks/Tasks';
import Form from '../Components/Form/Form';

class App extends Component {

  state = {
    taskList: []
  };

  componentDidMount() {
    let tasks;
    if (!JSON.parse(localStorage.getItem('tasks'))) {
      localStorage.setItem('tasks', JSON.stringify([]));
    }
    tasks = JSON.parse(localStorage.getItem('tasks'));
    this.setState({taskList: tasks})
  }

  addTaskHandler = (e) => {
    if (e.target.firstChild.value !== '') {
      const input = e.target.firstChild.value;

      this.setState(prevState => {
        return {
          taskList: prevState.taskList.concat(input)
        }});

      // Local Storage
      let tasks;
      if (localStorage.getItem('tasks') === null) {
        tasks = [];
      } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
      }
      tasks.push(input);

      localStorage.setItem('tasks', JSON.stringify(tasks));

      e.target.firstChild.value = '';
    }
    e.preventDefault()
  };

  removeTaskHandler = (taskId) => {

    this.setState(prevState => {
      return {
        taskList: prevState.taskList.filter((task, index) => index !== taskId)
      }
    });

    const tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.splice(taskId, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  render() {
    return (
      <div className="App">
        <Form added={this.addTaskHandler}/>
        <Tasks
          taskList={this.state.taskList}
          removed={this.removeTaskHandler}/>
      </div>
    )
  }
}

export default App;