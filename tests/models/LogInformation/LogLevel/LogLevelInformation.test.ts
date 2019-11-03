import LogLevelInformation from "../../../../src/models/LogInformation/LogLevel/LogLevelInformation"
import LogLevels from "../../../../src/models/LogLevels"

describe('LogLevelInformation class', () => {
    it('can contain a log level without color', () => {
        const logLevel = new LogLevelInformation(LogLevels.DEBUG, false)
        expect(logLevel.toLogText()).toBe('DEBUG')
    })

    it('can contain a log level with color', () => {
        const logLevel = new LogLevelInformation(LogLevels.SUCCESS, true)
        expect(logLevel.toLogText()).toBe('\x1b[32mSUCCESS\x1b[0m')
    })
})