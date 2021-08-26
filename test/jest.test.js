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
    const event = { index: 0, value: 'new description' };
    manager.updateTaskDescription(event, list);
  });

  test('', () => {
    expect(list.list[0].description).toEqual('new description');
  });

  test('', () => {
    expect(list.list[0].description).not.toEqual('first task');
  });
});

describe('Check a task completed status and updates it in localstorage', () => {
  beforeAll(() => {
    list.addNewTask('first task');
    list.addNewTask('second task');
    list.addNewTask('third task');
    const event = { index: 0, value: 'new description' };
    manager.updateTaskDescription(event, list);
  });

  test('', () => {
    expect(list.list[0].description).toEqual('new description');
  });

  test('', () => {
    expect(list.list[0].description).not.toEqual('first task');
  });
});
