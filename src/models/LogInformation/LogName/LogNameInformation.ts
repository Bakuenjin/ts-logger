import ILogInformation from "../meta/ILogInformation";

export default class LogNameInformation implements ILogInformation {

    private _name: string

    constructor(name: string) {
        this._name = name
    }

    public toLogText(): string {
        return this._name
    }

}