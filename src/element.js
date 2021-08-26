class Element {
  getSVG = (focus, id = 0) => {
    if (focus) {
      return `<svg id="bin${id}" class="svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M3 8v16h18v-16h-18zm5 12c0 .552-.448 1-1 1s-1-.448-1-1v-8c0-.552.448-1 1-1s1 .448 1 1v8zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-8c0-.552.448-1 1-1s1 .448 1 1v8zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-8c0-.552.448-1 1-1s1 .448 1 1v8zm4-15.375l-.409 1.958-19.591-4.099.409-1.958 5.528 1.099c.881.185 1.82-.742 2.004-1.625l5.204 1.086c-.184.882.307 2.107 1.189 2.291l5.666 1.248z"/></svg>`;
    }
    return '<svg class="svg" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"/></svg>';
  };

  setUpElements() {
    this.li = document.createElement('li');
    this.li.classList = 'list-row focused-task';
    this.input = document.createElement('input');
    this.input.type = 'checkbox';
    this.input.classList = 'me-2';
    this.label = document.createElement('input');
    this.label.type = 'text';
    this.label.classList = 'flex-grow-1 border-0';
    this.svg = document.createElement('div');
    this.svg.innerHTML = this.getSVG(false);
  }

  createListTask(task) {
    this.setUpElements();
    this.input.id = `task${task.index}`;
    this.label.id = `desc${task.index}`;
    this.label.value = task.description;
    this.label.name = `desc${task.index}`;
    this.svg.id = `svg${task.index}`;
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

  crossOutDescription(id, completed) {
    this.label = document.getElementById(id);
    if (completed) {
      this.label.classList = 'flex-grow-1 text-decoration-line-through';
    } else {
      this.label.classList = 'flex-grow-1';
    }
    return this.label.classList;
  }

  changeListBackground(id) {
    this.svg = document.getElementById(`svg${id}`);
    this.svg.innerHTML = this.getSVG(true, id);
  }

  defaultListBackground(id) {
    this.svg = document.getElementById(`svg${id}`);
    if (this.svg) {
      this.svg.innerHTML = this.getSVG(false);
    }
  }

  clearUl = () => {
    document.getElementById('task-list').innerHTML = '';
  };
}

const element = new Element();
export default element;
