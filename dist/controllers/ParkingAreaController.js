import TableView from '../views/TableView.js';
import ErrorGenerator from '../utils/ErrorGenerator.js';
import ErrorDisplayer from '../views/ErrorDisplayer.js';
export default class ParkingArea {
    static addCustomer(customer) {
        try {
            if (!customer.name) {
                throw ErrorGenerator.generate('Por favor, preencha todos os campos.');
            }
            else {
                TableView.addRow(customer);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                ErrorDisplayer.display(error);
            }
            else {
                console.log(error);
            }
        }
    }
}
