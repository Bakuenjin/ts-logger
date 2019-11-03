import ILogInformationFactory from "../meta/ILogInformationFactory";
import LogNameInformation from "./LogNameInformation";

export default class LogNameInformationFactory implements ILogInformationFactory {
    
    create(name: string): LogNameInformation {
        return new LogNameInformation(name)
    }

}