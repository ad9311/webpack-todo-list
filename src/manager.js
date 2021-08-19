class Manager {
  updateLocalStorage = (list) => {
    localStorage.setItem('list', JSON.stringify(list.list));
  };

  renderStorage = (list, element) => {
    if (localStorage.getItem('list')) {
      list.list = JSON.parse(localStorage.getItem('list'));
      for (let i = 0; i < list.list.length; i += 1) {
        const ul = document.getElementById('task-list');
        ul.appendChild(element.createListTask(list.list[i]));
      }
    }
  };

  renderNewTask = (list, element) => {
    const ul = document.getElementById('task-list');
    ul.appendChild(element.createListTask(list.list[list.lastIndex]));
    this.updateLocalStorage(list);
  };

  updateTask = (event, list, element) => {
    const index = event.target.id.replace(/^\D+/g, '');
    const completed = event.target.checked;
    list.setCompleted(index, completed);
    element.updateDescription(`desc${index}`, completed);
    this.updateLocalStorage(list);
  };
}

const manager = new Manager();
export default manager;
