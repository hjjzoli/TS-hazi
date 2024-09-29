import { User } from "../models/user";
import { BehaviorSubject } from "rxjs";
import { Order } from "../models/order";
import { Product } from "../models/product";

export class UserService {
  private user: User;
  private userSubject: BehaviorSubject<User>;

    constructor() {
        this.user = new User("1", "John Doe", "");
        this.userSubject = new BehaviorSubject(this.user);
    }

    public getUser(): BehaviorSubject<User> {
        return this.userSubject;
    }

    public setUser(user: User): void {
        this.user = user;
        this.userSubject.next(this.user);
    }

    public placeOrder(products: Product[]): Order {
        return this.user.placeOrder(products);
    }
}
