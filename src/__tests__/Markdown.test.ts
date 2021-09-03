import makeHeader from "../makeHeader"
import makeTable from "../makeTable"
import makeTableOfContents from "../makeTableOfContents"
import Markdown from "../Markdown"

const md = new Markdown()
const title = makeHeader({
    type: '#'
})((str: string) => str)
const h1 = makeHeader({
    type: '##'
})((str: string) => str)
md.add(title('Markdown.js'))
    .add(h1('Markdown powered by JavaScript'))

const toc = makeTableOfContents({})([
    { title: 'Description', key: 'description' }
])
md.add(toc)

const table = makeTable({
    columns: [
        { name: 'Name', render: (data: string) => data.split(' ')[0] }
    ]
})(['Andrew Yueh'])

md.add(table)

describe('Markdown', () => {
    it('does not throw', () => {
        expect(() => Markdown).not.toThrow()
    })
    it('creates template', () => {
        let expected = '# Markdown.js'
        expected += '\n\n## Markdown powered by JavaScript'
        expected += '\n\n- [Description](#description)'
        expected += '\n\n| Name |'
        expected += '\n| -- |'
        expected += '\n| Andrew |'
        expect(md.text).toEqual(expected)
    })
})
