
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';
import { Inventory } from '../models/inventory';



export class InventoryService {
    private inventory: Inventory;
    private inventorySubject: BehaviorSubject<Inventory>;

    constructor() {
        this.inventory = new Inventory([]);
        this.inventorySubject = new BehaviorSubject(this.inventory);
    }

  public addProduct(product: Product): void {
    this.inventory.addProduct(product);
    this.inventorySubject.next(this.inventory);
  }

  public removeProduct(id: string): void {
    this.inventory.removeProduct(id);
    this.inventorySubject.next(this.inventory);
  }

  public findProduct(id: string): Product | undefined {
    return this.inventory.findProduct(id);
  }

  public findProductByName(name: string): Product | undefined {
    return this.inventory.findProductByName(name);
  }

  public listAllProducts(): Product[] {
    return this.inventory.listAllProducts();
  }

  public getInventory(): BehaviorSubject<Inventory> {
    return this.inventorySubject;
  }
}