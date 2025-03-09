import { Customer } from './customer';

// let customer = new Customer("John", "Smith");
// customer.greeter(); 

const customer = new Customer("John", "Smith", 36);
console.log(customer.firstName + "is " + customer.GetAge() + " years old.");
    