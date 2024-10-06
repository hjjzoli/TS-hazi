export class Task {
    private id: number;
    private title: string;
    private description: string;
    private completed: boolean;

    constructor(id: number, title: string, description: string, completed: boolean) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(title: string): void {
        this.title = title;
    }

    getDescription(): string {
        return this.description;
    }

    setDescription(description: string): void {
        this.description = description;
    }

    isCompleted(): boolean {
        return this.completed;
    }

    setCompleted(completed: boolean): void {
        this.completed = completed
    }

    printDetails(): void {
        console.log(`${this.id}\t${this.title}\t${this.description} ${this.completed ? '\t(complete)' : ''}`);
    }


}