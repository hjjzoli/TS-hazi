"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(id, title, description, completed) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }
    getDescription() {
        return this.description;
    }
    setDescription(description) {
        this.description = description;
    }
    isCompleted() {
        return this.completed;
    }
    setCompleted(completed) {
        this.completed = completed;
    }
    printDetails() {
        console.log(`${this.id}\t${this.title}\t${this.description} ${this.completed ? '\t(complete)' : ''}`);
    }
}
exports.Task = Task;
