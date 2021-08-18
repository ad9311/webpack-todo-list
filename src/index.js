import './style.css';
import { list } from './list.js';

list.addNewTask('Walk dog');
list.addNewTask('Clean kitchen');
list.addNewTask('Pay bills');
list.addNewTask('Water plants');
list.addNewTask('Buy food');


function renderList() {
  const svg = '<svg class="svg" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"/></svg>';
  for (let i = 0; i < list.list.length; i += 1) {
    const ul = document.getElementById('task-list');
    const li = document.createElement('li');
    li.innerHTML = `<input class="me-2" type="checkbox"></input><label class="flex-grow-1">${list.list[i].description}</label>${svg}`;
    li.classList = 'list-row';
    ul.appendChild(li);
  }
}

window.addEventListener('load', () => {
  renderList();
});
