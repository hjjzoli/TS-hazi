import { TodoItem } from './todoItems';

export class TodoCollection {
    private nextId: number = 1;
    private itemMap = new Map<number, TodoItem<any>>();

    constructor(public userName: string, public todoItems: TodoItem<any>[] = []) {
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }

    addTask(task: string): number {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new TodoItem(this.nextId, task, false, ""));
        return this.nextId;
    }

    getTodoById(id: number): TodoItem<any> {
        return this.itemMap.get(id)!;
    }

    getTodoItems(includeComplete: boolean): TodoItem<any>[] {
        return [...this.itemMap.values()]
            .filter(item => includeComplete || !item.complete);
    }

    taskDone(id: number): void {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = true;
        }
    }

    deleteTask(id: number): void {
        this.itemMap.delete(id);
    }
}



