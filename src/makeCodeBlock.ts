import fs from 'fs'

type options = {
    spaces: number;
}
const makeCodeBlock = (options: options) => {
    const { spaces } = options
    let positionStart: number
    let positionEnd: number
    const baseIndentation = 0

    const err = new Error();

    Error.prepareStackTrace = (_, stack) => stack;

    const stack = err.stack;

    Error.prepareStackTrace = undefined;

    const absolutePath = stack[1].getFileName();
    return {
        start: () => {
            var e = new Error()
            if (!e.stack) try {
                // IE requires the Error to actually be throw or else the Error's 'stack'
                // property is undefined.
                throw e
            } catch (e) {
                if (!e.stack) {
                    return 0 // IE < 10, likely
                }
            }
            var stack = e.stack.toString().split(/\r\n|\n/)
            // We want our caller's frame. It's index into |stack| depends on the
            // browser and browser version, so we need to search for the second frame:
            var frameRE = /:(\d+):(?:\d+)[^\d]*$/
            do {
                var frame = stack.shift()
            } while (!frameRE.exec(frame) && stack.length)
            positionStart = Number(frameRE.exec(stack.shift())[1])
        },
        end: () => {
            var e = new Error()
            if (!e.stack) try {
                // IE requires the Error to actually be throw or else the Error's 'stack'
                // property is undefined.
                throw e
            } catch (e) {
                if (!e.stack) {
                    return 0 // IE < 10, likely
                }
            }
            var stack = e.stack.toString().split(/\r\n|\n/)
            // We want our caller's frame. It's index into |stack| depends on the
            // browser and browser version, so we need to search for the second frame:
            var frameRE = /:(\d+):(?:\d+)[^\d]*$/
            do {
                var frame = stack.shift()
            } while (!frameRE.exec(frame) && stack.length)
            positionEnd = Number(frameRE.exec(stack.shift())[1]) - 1
        },
        importCode: () => { },
        get: () => {
            const newFile = fs.readFileSync(absolutePath, { encoding: "utf8" })
            return newFile
                .split('\n')
                .slice(positionStart, positionEnd)
                .map(line => line.slice(spaces))
                .join('\n')
        },
    }
}

export default makeCodeBlock
