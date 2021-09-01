type options<T> = {
    columns: ((arg: T) => string)[];
}

const makeTable = <T>(options: options<T>) => (data: T[]) => {
    const { columns } = options
    return data.map((value, idx) => {
        const parser = columns[idx]
        return parser(value)
    }).join('|')
}

export default makeTable
