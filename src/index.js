import './style.css';
import list from './list.js';
import element from './element.js';

const updateLocalStorage = () => {
  localStorage.setItem('list', JSON.stringify(list.list));
};

const renderStorage = () => {
  if (localStorage.getItem('list')) {
    list.list = JSON.parse(localStorage.getItem('list'));
    console.log(list.list);
    for (let i = 0; i < list.list.length; i += 1) {
      const ul = document.getElementById('task-list');
      ul.appendChild(element.createListTask(list.list[i]));
    }
  }
};

const renderNewTask = () => {
  const ul = document.getElementById('task-list');
  ul.appendChild(element.createListTask(list.list[list.lastIndex]));
  updateLocalStorage();
}

const updateTask = (e) => {
  if (e.target !== e.currentTarget) {
    const index = e.target.id.replace(/^\D+/g, '');
    const completed = e.target.checked;
    list.setCompleted(index, completed);
    element.updateDescription(`desc${index}`, completed);
    updateLocalStorage();
  }
};

const addTaskToList = (e) => {
  if (e.key === 'Enter') {
    const input = document.getElementById('add-task');
    list.addNewTask(input.value);
    input.value = '';
    renderNewTask();
  }
}

window.addEventListener('load', renderStorage(), false);
document.getElementById('task-list').addEventListener('change', updateTask, false);
document.getElementById('add-task').addEventListener('keypress', addTaskToList, false);
