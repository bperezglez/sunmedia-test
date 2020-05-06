import Event from './Event';

const eventMock = {
    second: 1,
    message: 'Mock',
    type: 'Mock-A'
};

describe('Event unit test', ()=> {
    let myEvent = null;
    beforeEach(() => {
        myEvent = new Event(eventMock);
    });

    test('Event must has own properties {_second, _type, _message}', () => {
        expect(myEvent.hasOwnProperty('_second')).toBeTruthy()
        expect(myEvent.hasOwnProperty('_type')).toBeTruthy()
        expect(myEvent.hasOwnProperty('_message')).toBeTruthy()
    });
    test('properties {_second, _type, _message} equals to {_second: 1, _type: "Mock-A", _message: "Mock"}', () => {
        expect(myEvent._second).toBe(1);
        expect(myEvent._type).toBe('Mock-A');
        expect(myEvent._message).toBe('Mock');
    });
    test('Event.second must return value 1', () => {
        expect(myEvent.second).toBe(1);
    });
    test('Event.message must return value At second 1: {"type":"Mock-A","message":"Mock"}', () => {
        expect(myEvent.message).toBe('At second 1: {"type":"Mock-A","message":"Mock"}');
    });
})
