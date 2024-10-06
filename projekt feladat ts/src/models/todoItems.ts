export class TodoItem<T> {
  constructor(public id: number, public task: T, public complete: boolean = false, public content: string) {}

  printDetails(): void {
    console.log(`${this.id}\t${this.task} ${this.complete ? '\t(complete)' : ''}`);
  }
}