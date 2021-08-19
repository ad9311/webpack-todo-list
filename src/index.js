import './style.css';
import list from './list.js';
import element from './element.js';

list.addNewTask('Walk dog');
list.addNewTask('Clean kitchen');
list.addNewTask('Pay bills');
list.addNewTask('Water plants');
list.addNewTask('Buy food');

function updateLocalStorage() {
  localStorage.setItem('list', JSON.stringify(list.list));
}

function renderList() {
  if (localStorage.getItem('list')) {
    list.list = JSON.parse(localStorage.getItem('list'));
  }
  for (let i = 0; i < list.list.length; i += 1) {
    const ul = document.getElementById('task-list');
    ul.appendChild(element.createListTask(list.list[i]));
  }
  updateLocalStorage();
}

function updateTask(e) {
  if (e.target !== e.currentTarget) {
    const index = e.target.id.replace(/^\D+/g, '');
    const completed = e.target.checked;
    list.setCompleted(index, completed);
    element.updateDescription(`desc${index}`, completed);
    updateLocalStorage();
  }
}

window.addEventListener('load', renderList(), false);

document.querySelector('#task-list').addEventListener('change', updateTask, false);
