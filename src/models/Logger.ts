import ILogFormatter from "./ILogFormatter"
import ILogInformation from "./LogInformation/meta/ILogInformation"
import DefaultLogFormatter from "./DefaultLogFormatter"
import LogLevel from "./LogLevel"
import LogLevels from "./LogLevels"
import LogNameInformation from "./LogInformation/LogName/LogNameInformation"
import LogLevelInformationFactory from "./LogInformation/LogLevel/LogLevelInformationFactory"
import LogTimestampInformationFactory from "./LogInformation/LogTimestamp/LogTimestampInformationFactory"
import LogNameInformationFactory from "./LogInformation/LogName/LogNameInformationFactory"
import ILogInformationFactory from "./LogInformation/meta/ILogInformationFactory"

type LoggerOptions = {
    /**
     * Should the output be colored according to the log level? (Only has effect when the default formatter is used.)
     */
    useColor?: boolean
    /**
     * Should a timestamp of the current date be included?
     */
    includeTimestamp?: boolean
    /**
     * The logger can include custom meta data.
     * The metadata needs to be created via an custom implementation of the `ILogInformationFactory`.
     * This option can be a list of such custom implementations.
     */
    customLogInformationFactories?: ILogInformationFactory[]
    /**
     * A custom formatter to override the default formatter.
     */
    customFormatter?: ILogFormatter
    /**
     * Should global custom log info factories be used?
     */
    useGlobalLogInformationFactories?: boolean
}

export default class Logger {

    private static _globalCustomFactories: ILogInformationFactory[]

    /**
     * Adds the specified factory to the list of global custom log factories.
     */
    public static addGlobalLogInformationFactory(factory: ILogInformationFactory): void {
        if (!this._globalCustomFactories)
            this._globalCustomFactories = []
        this._globalCustomFactories.push(factory)
    }

    /**
     * @private
     */
    private _data: {
        nameInformation: LogNameInformation
        levelInformationFactory: LogLevelInformationFactory
        timestampInformationFactory?: LogTimestampInformationFactory
        formatter: ILogFormatter
        customLogInformationFactories: ILogInformationFactory[]
        useGlobalFactories: boolean
    }

    constructor(name: string, options: LoggerOptions = {}) {
        const nameInformationFactory = new LogNameInformationFactory()
        this._data = {
            nameInformation: nameInformationFactory.create(name),
            levelInformationFactory: new LogLevelInformationFactory(!!options.useColor),
            formatter: options.customFormatter ? options.customFormatter : new DefaultLogFormatter(),
            customLogInformationFactories: options.customLogInformationFactories ? options.customLogInformationFactories : [],
            useGlobalFactories: !!options.useGlobalLogInformationFactories
        }
        
        if (options.includeTimestamp)
            this._data.timestampInformationFactory = new LogTimestampInformationFactory()
    }

    /**
     * Creates the log information list with the following structure:
     * 1. Logger name
     * 2. Global custom factories (if wanted)
     * 3. Local custom factories (if any)
     * 4. Timestamp (if wanted)
     * 5. Log Level
     * @private
     */
    private _createLogInformationList(level: LogLevel): ILogInformation[] {
        const logInfoList: ILogInformation[] = [ this._data.nameInformation ]

        // Add global log infos if wanted
        if (this._data.useGlobalFactories)
            logInfoList.push(...Logger._globalCustomFactories.map(factory => factory.create()))
        
        // Add custom log information if any exist
        if (this._data.customLogInformationFactories.length)
            logInfoList.push(...this._data.customLogInformationFactories.map(factory => factory.create()))

        // Add timestamp if wanted
        if (this._data.timestampInformationFactory)
            logInfoList.push(this._data.timestampInformationFactory.create())
        
        // Finally, add log level info
        logInfoList.push(this._data.levelInformationFactory.create(level))
        
        return logInfoList
    }

    /**
     * Logs the specified items.
     * @private
     */
    private _handleLog(level: LogLevel, ...items: any[]): string {
        const logInfoList = this._createLogInformationList(level)
        const formattedOutput = this._data.formatter.format(logInfoList, items)

        if (level === LogLevels.ERROR)
            console.error(formattedOutput)
        else
            console.log(formattedOutput)
        return formattedOutput
    }

    public logInfo(...items: any[]): string {
        return this._handleLog(LogLevels.INFO, ...items)
    }

    public logDebug(...items: any[]): string {
        return this._handleLog(LogLevels.DEBUG, ...items)
    }

    public logSuccess(...items: any[]): string {
        return this._handleLog(LogLevels.SUCCESS, ...items)
    }

    public logWarn(...items: any[]): string {
        return this._handleLog(LogLevels.WARN, ...items)
    }

    public logError(...items: any[]): string {
        return this._handleLog(LogLevels.ERROR, ...items)
    }

    public log(...items: any[]):string { 
        return this.logInfo(...items)
    }

    /**
     * Adds the specified factory to the list of local custom log factories.
     */
    public addLocalLogInformationFactory(factory: ILogInformationFactory): void {
        this._data.customLogInformationFactories.push(factory)
    }

}