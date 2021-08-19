class Element {
  setUpElements() {
    this.li = document.createElement('li');
    this.li.classList = 'list-row';
    this.input = document.createElement('input');
    this.input.type = 'checkbox';
    this.input.classList = 'me-2';
    this.label = document.createElement('label');
    this.label.classList = 'flex-grow-1';
  }
  createListTask(task) {
    this.setUpElements();
    this.input.id = `task${task.index}`;
    this.label.id = `desc${task.index}`;
    this.label.innerHTML = task.description;
    this.li.id = `list${task.index}`;
    this.li.appendChild(this.input);
    this.li.appendChild(this.label);
    this.li.appendChild(this.svg);
    return this.li;
  }
  updateDescription(id, completed) {
    this.label = document.getElementById(id);
    if(completed) {
      this.label.classList = 'flex-grow-1 text-decoration-line-through';
    } else {
      this.label.classList = 'flex-grow-1';
    }
  }
}

export const element = new Element();
