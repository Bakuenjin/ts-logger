import { ILogInformationFactory } from "../../src";
import CustomLogInformation from "./CustomLogInformation";

export default class CustomLogInformationFactory implements ILogInformationFactory {

    private _someData: string

    constructor(someData: string) {
        this._someData = someData
    }

    public setData(newData: string) {
        this._someData = newData
    }

    public create() {
        return new CustomLogInformation(this._someData)
    }

}