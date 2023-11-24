
import { ICustomer } from '../interfaces/ICustomer.js';

export class ValidationService {
    static validateClientData(custumer: ICustomer): void {
        if (!custumer.name || !custumer.cpf) {
            throw new Error(
                'Por favor, preencha todos os campos do proprietário.',
            );
        }
    }
}
