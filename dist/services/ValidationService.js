export class ValidationService {
    static validateClientData(custumer) {
        if (!custumer.name || !custumer.cpf) {
            throw new Error('Por favor, preencha todos os campos do proprietário.');
        }
    }
}
