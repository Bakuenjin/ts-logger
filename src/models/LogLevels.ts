import Color from "./Color";
import LogLevel from "./LogLevel";

const LogLevels = {
    INFO:       new LogLevel('INFO', Color.Default),
    DEBUG:      new LogLevel('DEBUG', Color.Blue),
    SUCCESS:    new LogLevel('SUCCESS', Color.Green),
    WARN:       new LogLevel('WARN', Color.Yellow),
    ERROR:      new LogLevel('ERROR', Color.Red)
}

Object.freeze(LogLevels)
export default LogLevels