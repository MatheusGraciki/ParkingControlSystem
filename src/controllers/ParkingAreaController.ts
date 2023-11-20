import { ICustomer } from '../interfaces/ICustomer';
import TableView from '../views/TableView';
import ErrorGenerator from '../utils/ErrorGenerator';
import ErrorDisplayer from '../views/ErrorDisplayer';

export default class ParkingArea {
    static addCustomer(customer: ICustomer): void {
        try {
            if (!customer.name) {
                throw ErrorGenerator.generate(
                    'Por favor, preencha todos os campos.',
                );
            } else {
                TableView.addRow(customer);
            }
        } catch (error) {
            if (error instanceof Error) {
                ErrorDisplayer.display(error);
            } else {
                console.log(error);
            }
        }
    }
}
