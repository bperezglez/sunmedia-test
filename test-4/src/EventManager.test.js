import EventManager from './EventManager';

const eventsMock = [
    {
        second: 1,
        message: 'Mock',
        type: 'Mock-A',
    },
    {
        second: 3,
        message: 'Mock',
        type: 'Mock-B',
    },
];

describe('EventManager unit test', ()=> {
    let myEventManager = null;
    beforeEach(() => {
        myEventManager = new EventManager(eventsMock);
    });

    test('EventManager must has own property _events', () => {
        expect(myEventManager.hasOwnProperty('_events')).toBeTruthy()
    });
    test('property _events to be 2', () => {
        expect(myEventManager._events.length).toBe(2);
    });
    test('runTime must be called', ()=> {
        const spy = jest.spyOn(myEventManager, 'runTime');
        myEventManager.run();
        
        expect(spy).toHaveBeenCalled();
    });
    test('getRealSeconds must be called', (done)=> {
        const spy = jest.spyOn(myEventManager, 'getRealSeconds');
        myEventManager.run();
        setTimeout(() => {
            expect(spy).toHaveBeenCalled();
            done();
        }, 500);
    });
    test('checkEventsSeconds must be called', (done)=> {
        const spy = jest.spyOn(myEventManager, 'checkEventsSeconds');
        myEventManager.run();
        setTimeout(() => {
            expect(spy).toHaveBeenCalled();
            done();
        }, 500);
    });
})
