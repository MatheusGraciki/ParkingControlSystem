import ParkingArea from '../controllers/ParkingAreaController.js';
import Customer from '../models/CustumerModel.js';
export default class EventHandler {
    static handleFormSubmission(event) {
        const form = event.target;
        const vehicleData = {
            model: form.elements.namedItem('vehicle-model')
                ?.value || '',
            type: form.elements.namedItem('vehicle-type')
                ?.value || '',
            licensePlate: form.elements.namedItem('license-plate')
                ?.value || '',
        };
        const customerData = {
            name: form.elements.namedItem('customer-name')
                ?.value || '',
            cpf: form.elements.namedItem('customer-cpf')
                ?.value || '',
            vehicle: vehicleData,
            checkInTime: new Date(),
        };
        const customer = new Customer(customerData);
        ParkingArea.addCustomer(customer);
    }
}
