"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = age;
    }
    // public greeter() {
    //     console.log("Hello, " + this.firstName + " " + this.lastName);
    // }
    Customer.prototype.GetAge = function () {
        return this._age;
    };
    return Customer;
}());
exports.Customer = Customer;
