import LogLevelInformationFactory from "../../../../src/models/LogInformation/LogLevel/LogLevelInformationFactory"
import LogLevels from "../../../../src/models/LogLevels"

describe('LogLevelInformationFactory class', () => {
    it('creates LogLevelInformation instances without color', () => {
        const factory = new LogLevelInformationFactory(false)
        const info = factory.create(LogLevels.DEBUG)

        expect(info.toLogText()).toBe('DEBUG')
    })

    it('creates LogLevelInformation instance with color', () => {
        const factory = new LogLevelInformationFactory(true)
        const info = factory.create(LogLevels.SUCCESS)

        expect(info.toLogText()).toBe('\x1b[32mSUCCESS\x1b[0m')
    })
})