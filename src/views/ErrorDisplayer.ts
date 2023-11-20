export default class ErrorDisplayer {
    static display(error: Error): void {
        alert(`Erro: ${error.message}`);
    }
}
