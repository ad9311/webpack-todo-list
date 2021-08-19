class List {
  constructor() {
    this.list = [];
  }

  addNewTask(description) {
    this.lastIndex = this.list.length;
    this.list.push({ description, completed: false, index: this.lastIndex });
    return this.list;
  }

  setCompleted(index, completed) {
    if (completed) {
      this.list[Number(index)].completed = true;
    } else {
      this.list[Number(index)].completed = false;
    }
  }

  editDescription(index, newDescription) {
    this.list[Number(index)].description = newDescription;
  }
}

const list = new List();
export default list;
