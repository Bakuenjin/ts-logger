import LogTimestampInformation from "../../../../src/models/LogInformation/LogTimestamp/LogTimestampInformation"

describe('LogTimestampInformation class', () => {
    it('logs the time for the moment it was created', () => {
        const logTimestamp = new LogTimestampInformation()
        const timestamp = new Date()
        expect(logTimestamp.toLogText()).toBe(timestamp.toString())
    })
})