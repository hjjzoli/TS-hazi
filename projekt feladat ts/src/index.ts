import {TodoItem} from './models/todoItems';
import {TodoCollection} from './models/todoCollection';

let todos: TodoCollection = new TodoCollection('Adam', [
    new TodoItem(1, 'Buy Flowers', false, ''),
    new TodoItem(2, 'Get Shoes', true, ''),
    new TodoItem(3, 'Collect Tickets', false, ''),
    new TodoItem(4, 'Call Joe', true, '')
]);

console.clear();
console.log(`${todos.userName}'s Todo List`);

let newId: number = todos.addTask('New Task');
todos.taskDone(newId);
console.log(`Task ${newId} is done`);
todos.getTodoItems(true).forEach(item => item.printDetails());  
