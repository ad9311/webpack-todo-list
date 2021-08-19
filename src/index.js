import './style.css';
import list from './list.js';
import element from './element.js';
import manager from './manager.js';

const updateTask = (event) => {
  if (event.target !== event.currentTarget) {
    manager.updateTask(event, list, element);
  }
};

const addTaskToList = (event) => {
  if (event.key === 'Enter') {
    const input = document.getElementById('add-task');
    list.addNewTask(input.value);
    input.value = '';
    manager.renderNewTask(list, element);
  }
};

window.addEventListener('load', manager.renderStorage(list, element), false);
document.getElementById('task-list').addEventListener('change', updateTask, false);
document.getElementById('add-task').addEventListener('keypress', addTaskToList, false);
