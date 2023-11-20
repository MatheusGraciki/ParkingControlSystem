
import EventHandler from './controllers/EventHandlerController.js';

const $ = (query:string) => document.querySelector(query);

$('form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    EventHandler.handleFormSubmission(event);
});
