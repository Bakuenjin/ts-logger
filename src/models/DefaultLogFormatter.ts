import ILogFormatter from "./ILogFormatter";
import ILogInformation from "./LogInformation/meta/ILogInformation"

export default class DefaultLogFormatter implements ILogFormatter {

    /**
     * Applies the default formatting to the specified log.
     */
    public format(logInfos: ILogInformation[], items: any[]): string {
        const logInfosText = logInfos.map(info => `[${info.toLogText()}]`).join(' ')
        const itemsText = items.join(', ')
        return `${logInfosText}: ${itemsText}`
    }

}