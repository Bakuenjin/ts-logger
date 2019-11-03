import LogNameInformationFactory from "../../../../src/models/LogInformation/LogName/LogNameInformationFactory"

describe('LogNameInformationFactory class', () => {
    it('creates LogNameInstance with a name', () => {
        const factory = new LogNameInformationFactory()
        const logName = factory.create('Log Name')

        expect(logName.toLogText()).toBe('Log Name')
    })
})