export default class ErrorGenerator {
    static generate(message) {
        if (!message.trim()) {
            throw new Error('A mensagem de erro não pode estar vazia.');
        }
        return new Error(message);
    }
}
