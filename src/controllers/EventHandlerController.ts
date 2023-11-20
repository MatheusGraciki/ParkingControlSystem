import { ICustomer } from './../interfaces/ICustomer';
import { IVehicle } from './../interfaces/IVehicle';
import ParkingArea from '../controllers/ParkingAreaController';
import Customer from '../models/CustumerModel';

export default class EventHandler {
    static handleFormSubmission(event: Event): void {

        const form = event.target as HTMLFormElement;
        const vehicleData: IVehicle = {
            model:
                (form.elements.namedItem('vehicle-model') as HTMLInputElement)
                    ?.value || '',
            type:
                (form.elements.namedItem('vehicle-type') as HTMLInputElement)
                    ?.value || '',
            licensePlate:
                (form.elements.namedItem('license-plate') as HTMLInputElement)
                    ?.value || '',
        };

        const customerData: ICustomer = {
            name:
                (form.elements.namedItem('customer-name') as HTMLInputElement)
                    ?.value || '',
            cpf:
                (form.elements.namedItem('customer-cpf') as HTMLInputElement)
                    ?.value || '',
            vehicle: vehicleData,
            checkInTime: new Date(),
        };

        const customer = new Customer(customerData);

        ParkingArea.addCustomer(customer);
    }
}
