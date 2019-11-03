import ILogInformationFactory from "../meta/ILogInformationFactory";
import LogTimestampInformation from "./LogTimestampInformation";

export default class LogTimestampInformationFactory implements ILogInformationFactory {
    
    create(): LogTimestampInformation {
        return new LogTimestampInformation()
    }
    
}