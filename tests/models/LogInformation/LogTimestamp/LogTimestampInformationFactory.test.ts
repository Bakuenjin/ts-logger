import LogTimestampInformationFactory from "../../../../src/models/LogInformation/LogTimestamp/LogTimestampInformationFactory"

describe('LogTimestampInformationFactory class', () => {
    it('creates a LogTimestampInformation instance with the current date', () => {
        const factory = new LogTimestampInformationFactory()
        const logTimestamp = factory.create()
        const timestamp = new Date()
        expect(logTimestamp.toLogText()).toBe(timestamp.toString())
    })
})