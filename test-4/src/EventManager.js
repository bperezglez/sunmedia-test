export default class EventManager{
    constructor(events) {
        this._events = events;
    }
    run() {
        // implement your code here...
        const date = new Date();
        this.startTime = date.getTime();
        this.runTime();
        console.log("RUNNING");
    }

    runTime() {
        this.setInterval = window.setInterval(this.getRealSeconds.bind(this), 500);
    }

    getRealSeconds() {
        this.currentSecond = parseInt((new Date().getTime() - this.startTime) / 1000, 10);
        this.checkEventsSeconds();
    }
    checkEventsSeconds() {
        for (let i = 0; i < this._events.length; i++) {
            if (this._events[i].second === this.currentSecond) {
                console.log(this._events[i].message);
                this._events.splice(i, 1);
            }
        }
        if (this._events.length === 0) {
            window.clearInterval(this.setInterval);
        }
    }
};