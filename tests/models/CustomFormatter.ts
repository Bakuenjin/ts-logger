import { ILogFormatter, ILogInformation } from "../../out";

export default class CustomFormatter implements ILogFormatter {
    
    format(logInfos: ILogInformation[], items: any[]): string {
        return items.join(' | ')
    }
    
}