import { TodoItem } from "../models/todoItems";

export class TodoList<T> {
  private items: Map<number, TodoItem<T>> = new Map();

  addItem(item: TodoItem<T>): void {
    this.items.set(item.id, item);
    console.log(`Elem hozzáadva: ${item.id}`);
  }

    deleteItem(id: number): void {
        this.items.delete(id);
        console.log(`Elem törölve: ${id}`);
    }

    listItems(): void {
        this.items.forEach((item) => {
            item.printDetails();
        });
    }
}

export function logAddition(target: any, key: string, descriptor: PropertyDescriptor): void {
  const original = descriptor.value;

  descriptor.value = function(...args: any[]) {
    const returnValue = original.apply(this, args);
    console.log(`Az eredmény: ${returnValue}`);
    return returnValue;
  };
}