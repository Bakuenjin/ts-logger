import ILogInformation from "./LogInformation/meta/ILogInformation";

export default interface ILogFormatter {

    format(logInfos: ILogInformation[], items: any[]): string

}