type options = {
    type: '#' | '##' | '####' | '#####';
}
const makeHeader = (options: options) => <T>(cb: (increment: number, arg: T) => string) => {
    const { type } = options
    let inc = 0
    return (arg: T) => {
        inc++
        return `${type} ${cb(inc, arg)}`
    }
}

export default makeHeader
