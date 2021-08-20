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

  removeTaskFromList(index) {
    this.list = this.list.filter((task) => task.index !== Number(index));
    for (let i = 0; i < this.list.length; i += 1) {
      this.list[i].index = i;
    }
  }

  removeCompletedTasks() {
    this.list = this.list.filter((task) => task.completed !== true);
    for (let i = 0; i < this.list.length; i += 1) {
      this.list[i].index = i;
    }
  }
}

const list = new List();
export default list;
