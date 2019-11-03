import ILogInformationFactory from "../meta/ILogInformationFactory";
import LogLevel from "../../LogLevel";
import LogLevelInformation from "./LogLevelInformation";

export default class LogLevelInformationFactory implements ILogInformationFactory {
    
    private _useColor: boolean = false

    constructor(useColor: boolean) {
        this._useColor = useColor
    }

    create(level: LogLevel): LogLevelInformation {
        return new LogLevelInformation(level, this._useColor)
    }
    
}