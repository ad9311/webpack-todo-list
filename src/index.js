import './style.css';
import { list } from './list.js';
import { element } from './element.js';

list.addNewTask('Walk dog');
list.addNewTask('Clean kitchen');
list.addNewTask('Pay bills');
list.addNewTask('Water plants');
list.addNewTask('Buy food');

// function renderList() {
//   const svg = '<svg class="svg" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"/></svg>';
//   for (let i = 0; i < list.list.length; i += 1) {
//     const ul = document.getElementById('task-list');
//     const li = document.createElement('li');
//     li.innerHTML = `<input class="me-2" type="checkbox"></input><label class="flex-grow-1">${list.list[i].description}</label>${svg}`;
//     li.classList = 'list-row';
//     ul.appendChild(li);
//   }
// }

function updateLocalStorage() {
  localStorage.setItem('list', JSON.stringify(list.list));
}

function renderList() {
  for (let i = 0; i < list.list.length; i += 1) {
    const ul = document.getElementById('task-list');
    ul.appendChild(element.createListTask(list.list[i]));
  }
  updateLocalStorage();
}

function updateTask(e) {
  if (e.target !== e.currentTarget) {
    const index = e.target.id.replace( /^\D+/g, '');
    const completed = e.target.checked;
    list.setCompleted(index, completed);
    element.updateDescription(`desc${index}`, completed);
    updateLocalStorage();
  }
}

window.addEventListener('load', renderList(), false);

document.querySelector('#task-list').addEventListener('change', updateTask, false);
