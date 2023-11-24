import EventHandler from './controllers/EventHandlerController.js';
const $ = (query) => document.querySelector(query);
$('form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    EventHandler.handleFormSubmission();
});
