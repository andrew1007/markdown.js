import makeCodeBlock from "../makeCodeBlock"
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

const { start, end, get } = makeCodeBlock({
    spaces: 0,
    language: 'bash'
})
start()
const markdown = new Markdown()

const append = () => {
    markdown.add(title('Code Blocks'))
}
append()
end()

md.add(get())

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
        expected += '\n\n```bash'
        expected += '\nconst markdown = new Markdown()'
        expected += '\n'
        expected += `\nconst append = () => {`
        expected += `\n    markdown.add(title('Code Blocks'))`
        expected += `\n}`
        expected += `\nappend()`
        expected += '\n```'
        expect(md.text).toEqual(expected)
    })
})
