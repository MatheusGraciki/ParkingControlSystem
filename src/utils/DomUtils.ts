export default class DomUtils {
    static querySelector(query: string): HTMLInputElement | null {
        return document.querySelector(query) as HTMLInputElement;
    }
}
