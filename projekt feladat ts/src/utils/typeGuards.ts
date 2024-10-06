import { TodoItem } from '../models/todoItems';

export function isTodoItem(item: any): item is TodoItem<string> {
  return item instanceof TodoItem;
}

export function isTodoItemArray(items: any[]): items is TodoItem<string>[] {
  return items.every(item => isTodoItem(item));
}

export function isTodoItemArrayOrUndefined(items: any): items is TodoItem<string>[] | undefined {
  return items === undefined || isTodoItemArray(items);
}

export function isTodoItemOrUndefined(item: any): item is TodoItem<string> | undefined {
  return item === undefined || isTodoItem(item);
}


