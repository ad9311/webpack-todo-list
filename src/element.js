class Element {
  setUpElements() {
    this.li = document.createElement('li');
    this.li.classList = 'list-row';
    this.input = document.createElement('input');
    this.input.type = 'checkbox';
    this.input.classList = 'me-2';
    this.label = document.createElement('label');
    this.label.classList = 'flex-grow-1';
    this.svg = document.createElement('div');
    this.svg.innerHTML = '<svg class="svg" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"/></svg>';
  }

  createListTask(task) {
    this.setUpElements();
    this.input.id = `task${task.index}`;
    this.label.id = `desc${task.index}`;
    this.label.innerHTML = task.description;
    this.li.id = `list${task.index}`;
    if (task.completed) {
      this.input.checked = true;
      this.label.classList = 'flex-grow-1 text-decoration-line-through';
    }
    this.li.appendChild(this.input);
    this.li.appendChild(this.label);
    this.li.appendChild(this.svg);
    return this.li;
  }

  updateDescription(id, completed) {
    this.label = document.getElementById(id);
    if (completed) {
      this.label.classList = 'flex-grow-1 text-decoration-line-through';
    } else {
      this.label.classList = 'flex-grow-1';
    }
  }
}

const element = new Element();
export default element;
