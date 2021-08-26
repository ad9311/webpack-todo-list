/**
 * @jest-environment jsdom
 */

import element from '../src/element.js';
import list from '../src/list.js';
import manager from '../src/manager.js';

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
    expect(list.list).not.toBeNull;
  });

  test('Checks for the local storage length', () => {
    expect(JSON.parse(localStorage.getItem('list'))).toHaveLength(3);
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
    expect(JSON.parse(localStorage.getItem('list'))).toHaveLength(2);
  });

  test('Checks for local storage to be empty', () => {
    list.removeTaskFromList(0);
    list.removeTaskFromList(0);

    expect(JSON.parse(localStorage.getItem('list'))).toBeNull;
  });

  test('Checks presence of a li in the document', () => {
    expect(document.getElementById('task-list').lastChild.id).toEqual('list1');
  });
});
