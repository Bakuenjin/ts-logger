import DefaultLogFormatter from "../../src/models/DefaultLogFormatter"
import LogLevels from '../../src/models/LogLevels'
import LogNameInformation from "../../src/models/LogInformation/LogName/LogNameInformation"
import LogLevelInformation from "../../src/models/LogInformation/LogLevel/LogLevelInformation"


describe('DefaultLogFormatter class', () => {
    it('formats without color', () => {
        const formatter = new DefaultLogFormatter()
        const logName = new LogNameInformation('Default Log')
        const logLevel = new LogLevelInformation(LogLevels.DEBUG, false)
        const items = [
            'Hello',
            'World'
        ]

        const output = formatter.format([logName, logLevel], items)
        expect(output).toBe('[Default Log] [DEBUG]: Hello, World')
    })

    it('formats with color', () => {
        const formatter = new DefaultLogFormatter()
        const logName = new LogNameInformation('Default Color Log')
        const logLevel = new LogLevelInformation(LogLevels.SUCCESS, true)
        const items = [
            'Ohayo',
            'Sekai'
        ]

        const output = formatter.format([logName, logLevel], items)
        expect(output).toBe(`[Default Color Log] [\x1b[32mSUCCESS\x1b[0m]: Ohayo, Sekai`)
    })
})