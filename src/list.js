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

  setCompleted(index, completed) {
    if(completed) {
      this.list[Number(index)].completed = true;
    } else {
      this.list[Number(index)].completed = false;
    }
  }
}
export const list = new List();
