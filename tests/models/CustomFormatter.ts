import { ILogFormatter, ILogInformation } from "../../src";

export default class CustomFormatter implements ILogFormatter {
    
    format(logInfos: ILogInformation[], items: any[]): string {
        return items.join(' | ')
    }
    
}