import { Logger } from '../../src'
import CustomFormatter from './CustomFormatter'
import CustomLogInformationFactory from './CustomLogInformationFactory'

describe('Logger class', () =>{
    it('logs using the default options', () => {
        const logger: Logger = new Logger('Test Default Logger')
        const baseLogText = logger.log('0', '1')
        const logInfoText = logger.logInfo('Hello', 'World')
        const logDebugText = logger.logDebug('Hallo', 'Welt')
        const logSuccessText = logger.logSuccess('Ohayou', 'Sekai')
        const logWarnText = logger.logWarn('Hola', 'Mundo')
        const logErrorText = logger.logError('Ciao', 'Mondo')
        
        expect(baseLogText).toBe('[Test Default Logger] [INFO]: 0, 1')
        expect(logInfoText).toBe('[Test Default Logger] [INFO]: Hello, World')
        expect(logDebugText).toBe('[Test Default Logger] [DEBUG]: Hallo, Welt')
        expect(logSuccessText).toBe('[Test Default Logger] [SUCCESS]: Ohayou, Sekai')
        expect(logWarnText).toBe('[Test Default Logger] [WARN]: Hola, Mundo')
        expect(logErrorText).toBe('[Test Default Logger] [ERROR]: Ciao, Mondo')
    })

    it('logs using colors', () => {
        const logger: Logger = new Logger('Test Default Logger With Color', { useColor: true })
        const logText = logger.logSuccess('Es', 'Geht')

        expect(logText).toBe('[Test Default Logger With Color] [\x1b[32mSUCCESS\x1b[0m]: Es, Geht')
    })

    it('logs with timestamp', () => {
        const logger: Logger = new Logger('Test Default Logger With Timestamp', { includeTimestamp: true })
        const timestamp = new Date()
        const logText = logger.logSuccess('Yu', 'Huu')

        expect(logText).toBe(`[Test Default Logger With Timestamp] [${timestamp.toString()}] [SUCCESS]: Yu, Huu`)
    })

    it('can be used with a custom formatter', () => {
        const customFormatter = new CustomFormatter()
        const logger: Logger = new Logger('Test Logger With Custom Formatter', { customFormatter })
        const logText = logger.logDebug('Ich', 'Du')

        expect(logText).toBe('Ich | Du')
    })

    it('can be used with a custom log information', () => {
        const customLogInformationFactory = new CustomLogInformationFactory('Hello World')
        const logger: Logger = new Logger('Custom Info Logger', { customLogInformationFactories: [customLogInformationFactory] })
        const logText = logger.logDebug('Er', 'Sie', 'Es')

        customLogInformationFactory.setData('Goodbye World')
        const logText2 = logger.logDebug('Wir', 'Ihr', 'Sie')

        expect(logText).toBe('[Custom Info Logger] [Hello World] [DEBUG]: Er, Sie, Es')
        expect(logText2).toBe('[Custom Info Logger] [Goodbye World] [DEBUG]: Wir, Ihr, Sie')
    })

    it('allows to add a custom log information factory after instantiating', () => {
        const customLogInformationFactory = new CustomLogInformationFactory('Goodbye World')
        const logger = new Logger('Custom Info Later Logger')
        const logText = logger.logDebug('Er', 'Sie', 'Es')

        logger.addLocalLogInformationFactory(customLogInformationFactory)
        const logText2 = logger.logDebug('Wir', 'Ihr', 'Sie')

        expect(logText).toBe('[Custom Info Later Logger] [DEBUG]: Er, Sie, Es')
        expect(logText2).toBe('[Custom Info Later Logger] [Goodbye World] [DEBUG]: Wir, Ihr, Sie')
    })
})