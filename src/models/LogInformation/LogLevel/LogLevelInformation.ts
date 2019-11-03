import ILogInformation from "../meta/ILogInformation";
import LogLevel from "../../LogLevel";
import Color from "../../Color";

export default class LogLevelInformation implements ILogInformation {
    
    private _level: LogLevel
    private _useColor: boolean

    constructor(level: LogLevel, useColor: boolean) {
        this._level = level
        this._useColor = useColor
    }

    toLogText(): string {
        return this._useColor ? 
            this._level.color + this._level.name + Color.Default :
            this._level.name
    }

}