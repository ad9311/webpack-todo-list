class List {
  constructor() {
    this.lastIndex = -1;
    this.list = [];
  }

  addNewTask(description) {
    this.lastIndex += 1;
    this.list.push({description: description, completed: false, index: this.lastIndex});
    return this.list;
  }
}
export const list = new List();
