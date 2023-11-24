import { IVehicle } from "./IVehicle.js";

export interface ICustomer {
    checkInTime: Date;
    name: string;
    cpf: string;
    vehicle: IVehicle
}
