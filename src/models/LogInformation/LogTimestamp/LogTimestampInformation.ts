import ILogInformation from "../meta/ILogInformation";

export default class LogTimestampInformation implements ILogInformation {
    
    private _timestamp: Date

    constructor() {
        this._timestamp = new Date()
    }
    
    toLogText(): string {
        return `${this._timestamp}`
    }

}