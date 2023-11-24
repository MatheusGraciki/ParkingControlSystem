import DomUtils from '../utils/DomUtils.js';
import ParkingArea from '../controllers/ParkingAreaController.js';
import Customer from '../models/CustumerModel.js';
export default class EventHandler {
    static handleFormSubmission() {
        const vehicleData = {
            model: DomUtils.querySelector('#vehicle-model')?.value || '',
            type: DomUtils.querySelector('#vehicle-type')?.value || '',
            licensePlate: DomUtils.querySelector('#license-plate')?.value || '',
        };
        const customerData = {
            name: DomUtils.querySelector('#customer-name')?.value || '',
            cpf: DomUtils.querySelector('#customer-cpf')?.value || '',
            vehicle: vehicleData,
            checkInTime: new Date(),
        };
        const customer = new Customer(customerData);
        ParkingArea.addCustomer(customer);
    }
}
