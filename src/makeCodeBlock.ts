import fs from 'fs'
import path from 'path'

type options = {
    spaces: number;
    language: string;
    fileImport?: string;
}
const makeCodeBlock = (options: options) => {
    const { spaces, language, fileImport } = options
    let positionStart: number
    let positionEnd: number

    const err = new Error()
    Error.prepareStackTrace = (_, stack) => stack
    const stack = err.stack
    Error.prepareStackTrace = undefined

    // @ts-ignore
    const absolutePath = stack[1].getFileName()
    return {
        start: () => {
            var e = new Error()
            if (!e.stack) try {
                // IE requires the Error to actually be throw or else the Error's 'stack'
                // property is undefined.
                throw e
            } catch (e) {
                if (!e.stack) {
                    positionStart = 0 // IE < 10, likely
                }
            }
            // @ts-ignore
            var stack = e.stack.toString().split(/\r\n|\n/)
            // We want our caller's frame. It's index into |stack| depends on the
            // browser and browser version, so we need to search for the second frame:
            var frameRE = /:(\d+):(?:\d+)[^\d]*$/
            do {
                var frame = stack.shift()
                // @ts-ignore
            } while (!frameRE.exec(frame) && stack.length)
            // @ts-ignore
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
                    positionEnd = 0 // IE < 10, likely
                }
            }
            // @ts-ignore
            var stack = e.stack.toString().split(/\r\n|\n/)
            // We want our caller's frame. It's index into |stack| depends on the
            // browser and browser version, so we need to search for the second frame:
            var frameRE = /:(\d+):(?:\d+)[^\d]*$/
            do {
                var frame = stack.shift()
                // @ts-ignore
            } while (!frameRE.exec(frame) && stack.length)
            // @ts-ignore
            positionEnd = Number(frameRE.exec(stack.shift())[1]) - 1
        },
        get: () => {
            if (fileImport) {
                return `\`\`\`${language}\n` +
                    fs.readFileSync(path.join(absolutePath.split('/').slice(0, -1).join('/'), fileImport), { encoding: "utf8" })
                    + '\n```'
            }
            const newFile = fs.readFileSync(absolutePath, { encoding: "utf8" })
            return `\`\`\`${language}\n` +
                newFile
                    .split('\n')
                    .slice(positionStart, positionEnd)
                    .map(line => line.slice(spaces))
                    .join('\n')
                    .concat('\n')
                + '```'
        },
    }
}

export default makeCodeBlock
