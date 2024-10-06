
export class LoadManager<T> {

    private items: T[] = [];
    public borrower: T | undefined;
    public book: T;

    addItem(item: T): void {

        this.items.push(item);

    }

    removeItem(item: T): void {

        const index = this.items.indexOf(item);

        if (index !== -1) {

            this.items.splice(index, 1);

        }

    }

    getItems(): T[] {

        return this.items;

    }

}
