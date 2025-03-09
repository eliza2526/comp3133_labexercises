export class Customer {
    firstName: string;
    lastName: string;
    
    public greeter() {
        console.log("Hello, " + this.firstName + " " + this.lastName);
    }

}

