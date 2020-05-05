import EventManager from './EventManager';
import Event from './Event';

export default class EventManagerFactory{
    static create(events, types) {
        // implement your code here...
        const eventsObjects = [];
        
        for (let i = 0; i < events.length; i++) {
            if (types.indexOf(events[i].type) !== -1) {
                eventsObjects.push(new Event(events[i]));
            }
        }
        return new EventManager(eventsObjects);
    }
};