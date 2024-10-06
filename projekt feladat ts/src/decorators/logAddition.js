"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logAddition = logAddition;
function logAddition(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const task = args[0];
        console.log(`Megjegyzés: ${task.getId()}\t${task.getTitle()}\t${task.getDescription()}`);
        const result = originalMethod.apply(this, args);
        return result;
    };
    return descriptor;
}
