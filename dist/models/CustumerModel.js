export default class Customer {
    name;
    cpf;
    vehicle;
    checkInTime;
    constructor(customerData) {
        this.name = customerData.name;
        this.cpf = customerData.cpf;
        this.vehicle = customerData.vehicle;
        this.checkInTime = customerData.checkInTime;
    }
}
