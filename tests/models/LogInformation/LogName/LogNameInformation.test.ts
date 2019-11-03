import LogNameInformation from "../../../../src/models/LogInformation/LogName/LogNameInformation"

describe('LogNameInformation class', () => {
    it('logs its name', () => {
        const logName = new LogNameInformation('Log Name')
        expect(logName.toLogText()).toBe('Log Name')
    })
})