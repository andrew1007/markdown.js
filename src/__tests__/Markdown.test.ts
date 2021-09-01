import makeHeader from "../makeHeader"
import Markdown from "../Markdown"


describe('Markdown', () => {
    it('does not throw', () => {
        expect(() => Markdown).not.toThrow()
    })
    it('creates template', () => {
        const md = new Markdown()
        const title = makeHeader({
            type: '#'
        })((_, str: string) => str)
        const h1 = makeHeader({
            type: '##'
        })((_, str: string) => str)
        md.add(title('Markdown.js'))
            .add(h1('Markdown powered by JavaScript'))
        let expected = '# Markdown.js'
        expected += '\n\n## Markdown powered by JavaScript'
        expect(md.text).toEqual(expected)
    })
})
