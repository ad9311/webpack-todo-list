class Manager {
  constructor() {
    this.localstorage = [];
  }

  getItem() {
    return this.localstorage;
  }

  setItem(list) {
    this.localstorage = list.list;
    return this.localstorage;
  }

  updateLocalStorage = (list) => this.setItem(list);

  renderStorage = (list, element) => {
    if (this.localstorage.length > 0) {
      list.list = this.getItem();
      for (let i = 0; i < list.list.length; i += 1) {
        const ul = document.getElementById('task-list');
        ul.appendChild(element.createListTask(list.list[i]));
      }
    }
  };
}

const manager = new Manager();
export default manager;
