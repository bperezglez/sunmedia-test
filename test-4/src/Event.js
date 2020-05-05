export default class Event{
// implement your code here...
    constructor({second, type, message}) {
        this._second = second;
        this._type = type;
        this._message = message;
    }
    get second() {
        return this._second;
    }
    get message() {
        return `At second ${this.second}: ${JSON.stringify({type: this._type, message: this._message })}`;
    }
};