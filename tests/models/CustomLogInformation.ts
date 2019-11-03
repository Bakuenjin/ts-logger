import { ILogInformation } from "../../src";

export default class CustomLogInformation implements ILogInformation {

    private _someData: string

    constructor(someData: string) {
        this._someData = someData
    }

    public toLogText() {
        return this._someData
    }

}