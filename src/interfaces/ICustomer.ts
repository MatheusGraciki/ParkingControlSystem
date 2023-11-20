import { IVehicle } from "./IVehicle";

export interface ICustomer {
    checkInTime: Date;
    name: string;
    cpf: string;
    vehicle: IVehicle
}
