"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_1 = require("./customer");
// let customer = new Customer("John", "Smith");
// customer.greeter(); 
var customer = new customer_1.Customer("John", "Smith", 36);
console.log(customer.firstName + "is " + customer.GetAge() + " years old.");
