type options<T> = {
    columns: {
        render: ((data: T) => string);
        name: string;
    }[];
}

const makeTable = <T>(options: options<T>) => (data: T[]) => {
    const { columns } = options
    return '| '
        .concat(columns.map(({ name }) => name).join(' | '))
        .concat(' |')
        .concat('\n')
        .concat('| ')
        .concat(columns.map(() => '--').join(' | '))
        .concat(' |')

        .concat(data.map((datum) => {
            return ''
                .concat('\n')
                .concat('| ')
                .concat(columns.map(({ render }) => {
                    return render(datum)
                }).join(' | '))
                .concat(' |')
        }).join(''))
}

export default makeTable
