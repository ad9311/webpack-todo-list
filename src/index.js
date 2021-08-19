import './style.css';
import list from './list.js';
import element from './element.js';
import manager from './manager.js';

const updateTask = (event) => {
  if (event.target.id.includes('task')) {
    manager.updateTask(event, list, element);
  } else if (event.target.id.includes('desc')) {
    manager.updateTaskDescription(event, list);
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

const removeTask = () => {
  const task = document.getElementById(`list${manager.currentIndex}`);
  list.removeTaskFromList(manager.currentIndex);
  manager.updateLocalStorage(list);
  document.getElementById('task-list').removeChild(task);
};

const focusOnTask = (event) => {
  const index = manager.getIndex(event);
  if (event.target === document.activeElement) {
    manager.focusOnList(event, element);
    document.getElementById(`bin${index}`).addEventListener('click', removeTask, false);
  } else {
    manager.unfocusOnList(event, element);
  }
};

window.addEventListener('load', manager.renderStorage(list, element), false);
document.getElementById('task-list').addEventListener('change', updateTask, false);
document.getElementById('task-list').addEventListener('focusin', focusOnTask, false);
document.getElementById('task-list').addEventListener('focusout', focusOnTask, false);
document.getElementById('add-task').addEventListener('keypress', addTaskToList, false);
