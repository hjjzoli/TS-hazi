"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_1 = require("../models/user");
const rxjs_1 = require("rxjs");
class UserService {
    constructor() {
        this.user = new user_1.User("1", "John Doe", "");
        this.userSubject = new rxjs_1.BehaviorSubject(this.user);
    }
    getUser() {
        return this.userSubject;
    }
    setUser(user) {
        this.user = user;
        this.userSubject.next(this.user);
    }
    placeOrder(products) {
        return this.user.placeOrder(products);
    }
}
exports.UserService = UserService;
