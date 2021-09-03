type options = {
    type: '#' | '##' | '####' | '#####';
}
const makeHeader = (options: options) => <T>(cb: (arg: T, increment: number) => string) => {
    const { type } = options
    let inc = 0
    return (arg: T) => {
        inc++
        return `${type} ${cb(arg, inc)}`
    }
}

export default makeHeader
