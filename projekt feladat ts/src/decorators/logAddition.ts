import { Task } from '../models/task';

export function logAddition(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const task: Task = args[0];
        console.log(`Megjegyzés: ${task.getId()}\t${task.getTitle()}\t${task.getDescription()}`);
        const result = originalMethod.apply(this, args);
        return result;
    };

    return descriptor;
}   