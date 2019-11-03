import Color from "./Color"

export default class LogLevel {

    private _data: {
        name: string
        color: Color
    }

    constructor(name: string, color: Color) {
        this._data = {
            name, color
        }
    }

    get name(): string {
        return this._data.name
    }

    get color(): Color {
        return this._data.color
    }

}