import ILogInformation from "./ILogInformation";

export default interface ILogInformationFactory {

    create(data?: any): ILogInformation

}