import { ICustomer } from '../interfaces/ICustomer';
import { IVehicle } from '../interfaces/IVehicle';

export default class Customer {
    readonly name: string;
    readonly cpf: string;
    readonly vehicle: IVehicle;
    readonly checkInTime: Date;

    constructor(customerData: ICustomer) {
        this.name = customerData.name;
        this.cpf = customerData.cpf;
        this.vehicle = customerData.vehicle;
        this.checkInTime = customerData.checkInTime;
    }
}
