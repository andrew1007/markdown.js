import makeTable from "../makeTable"

describe('makeTable', () => {
    it('does not throw', () => {
        expect(() => makeTable).not.toThrow()
    })
    it('creates columns', () => {
        type item = string
        const table = makeTable({
            columns: [
                { render: (el: item) => el, name: 'hello' },
                { render: (el: item) => el, name: 'hi' }
            ]
        })
        const data = []
        let expected = '| hello | hi |'
        expected += '\n| -- | -- |'
        expect(table(data)).toEqual(expected)
    })
    it('creates columns with data', () => {
        type item = {
            'first name': string;
            'last name': string;
        }
        const table = makeTable({
            columns: [
                { render: (el: item) => el['first name'], name: 'first name' },
                { render: (el: item) => el['last name'], name: 'last name' }
            ]
        })
        const data = [
            {
                'first name': 'Andrew',
                'last name': 'Yueh'
            },
            {
                'first name': 'Charlie',
                'last name': 'Kim'
            }
        ]
        let expected = '| first name | last name |'
        expected += '\n| -- | -- |'
        expected += '\n| Andrew | Yueh |'
        expected += '\n| Charlie | Kim |'
        expect(table(data)).toEqual(expected)
    })
    it('creates table with complex parsing', () => {
        type item = {
            name: string;
        }
        const table = makeTable({
            columns: [
                {
                    render: (el: item) => el.name.split(' ')[0],
                    name: 'first name',
                },
                {
                    render: (el: item) => el.name.split(' ')[1],
                    name: 'last name',
                }
            ]
        })
        const data: item[] = [
            {
                name: 'Andrew Yueh'
            },
            {
                name: 'Charlie Kim'
            }
        ]
        let expected = '| first name | last name |'
        expected += '\n| -- | -- |'
        expected += '\n| Andrew | Yueh |'
        expected += '\n| Charlie | Kim |'
        expect(table(data)).toEqual(expected)
    })
})