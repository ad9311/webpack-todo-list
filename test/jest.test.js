/**
 * @jest-environment jsdom
 */
import element from '../src/element.js';
import list from '../src/list.js';
import manager from '../src/manager.js';

jest.mock('../src/manager.js');

beforeAll(() => {
  document.body.innerHTML = '<ul id="task-list"></ul>';
  list.addNewTask('first task');
  list.addNewTask('second task');
  list.addNewTask('third task');
  manager.updateLocalStorage(list);
  manager.renderStorage(list, element);
});

describe('Adds a task to the list', () => {
  test('Checks for first added task', () => {
    expect(list.list[0].description).toEqual('first task');
  });

  test('List should not be null', () => {
    expect(list.list.length).not.toBe(0);
  });

  test('Checks for the local storage length', () => {
    expect(manager.getItem()).toHaveLength(3);
  });

  test('Checks presence of a li in the document', () => {
    expect(document.getElementById('task-list').lastChild.id).toEqual('list2');
  });
});

describe('Removes a task from the list', () => {
  beforeAll(() => {
    list.removeTaskFromList(0);
    manager.updateLocalStorage(list);
    manager.renderStorage(list, element);
  });

  test('Checks for first added task', () => {
    expect(list.list[0].description).toEqual('second task');
  });

  test('Checks that first task is not first task', () => {
    expect(list.list[0].description).not.toEqual('first task');
  });

  test('Checks for the local storage length', () => {
    expect(manager.getItem()).toHaveLength(2);
  });

  test('Checks for local storage to be empty', () => {
    list.removeTaskFromList(0);
    list.removeTaskFromList(0);
    manager.updateLocalStorage(list);
    expect(manager.getItem()).toHaveLength(0);
  });

  test('Checks presence of a li in the document', () => {
    expect(document.getElementById('task-list').lastChild.id).toEqual('list1');
  });
});

describe('Edits a tasks description', () => {
  beforeAll(() => {
    list.addNewTask('first task');
    list.addNewTask('second task');
    list.addNewTask('third task');
    const event = { index: 0, value: 'new description', checked: false };
    manager.updateTaskDescription(event, list);
    manager.renderStorage(list, element);
  });

  test('It updates the description value of the task', () => {
    expect(list.list[0].description).toEqual('new description');
  });

  test('It doesnt keep old description', () => {
    expect(list.list[0].description).not.toEqual('first task');
  });
});

describe('Check a task completed status and updates it in localstorage', () => {
  beforeAll(() => {
    const event = { index: 0, checked: true };
    manager.updateTask(event, list, element);
  });

  test('Completed flag from task should be true', () => {
    expect(list.list[0].completed).toBe(true);
  });

  test('Completed flag from task should be true in localstorage', () => {
    const completedList = manager.getItem();

    expect(completedList[0].completed).toBe(true);
  });

  test('Completed flag from task should be false', () => {
    expect(list.list[0].completed).toBe(true);
    const event = { index: 0, checked: false };
    manager.updateTask(event, list, element);
    expect(list.list[0].completed).toBe(false);
  });

  test('Completed flag from task should be false in localstorage', () => {
    const completedList = manager.getItem();
    expect(completedList[0].completed).toBe(false);
  });

  test('Check crossOutDescription add to DOM', () => {
    const event = { index: 0, checked: true };
    element.label = document.getElementById(`desc${event.index}`);

    expect(
      element.crossOutDescription(`desc${event.index}`, event.checked),
    ).toBe(element.label.classList);
  });
});

describe('Clears completed tasks', () => {
  beforeAll(() => {
    const event = { index: 0, checked: true };
    manager.updateTask(event, list, element);
    element.clearUl();
    list.removeCompletedTasks();
  });

  test('Checks for empty ul element', () => {
    expect(document.getElementById('task-list').innerHTML).toEqual('');
  });

  test('Checks for list array size', () => {
    expect(list.list.length).toEqual(2);
  });

  test('Checks for local storage size', () => {
    manager.updateLocalStorage(list);
    expect(manager.getItem().length).toEqual(2);
  });

  test('Checks for DOM element childer count', () => {
    manager.renderStorage(list, element);
    expect(document.getElementById('task-list').childElementCount).toEqual(2);
  });
});
