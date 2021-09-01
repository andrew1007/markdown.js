import makeTableOfContents from "../makeTableOfContents"

type data = ({ title: string; key: string } | data)[]

describe('makeTableOfContents', () => {
    it('does not throw on instantiation', () => {
        expect(() => makeTableOfContents).not.toThrow()
    })

    it('creates single level table of contents', () => {
        const toc = makeTableOfContents({})
        const data: data = [
            { title: 'Quick Examples', key: 'quick-examples' },
            { title: 'Intro', key: 'intro' }
        ]
        let expected = '- [Quick Examples](#quick-examples)'
        expected += '\n- [Intro](#intro)'
        expect(toc(data)).toEqual(expected)
    })
    it('creates nested table of contents', () => {
        const toc = makeTableOfContents({})
        const data: data = [
            { title: 'Quick Examples', key: 'quick-examples' },
            { title: 'Intro', key: 'intro' },
            [
                { title: 'Basic Example', key: 'basic-example' },
                [
                    { title: 'Example 1', key: 'example-1' }
                ]
            ],
            { title: 'makeHeader', key: 'make-header' }
        ]
        let expected = '- [Quick Examples](#quick-examples)'
        expected += '\n- [Intro](#intro)'
        expected += '\n  - [Basic Example](#basic-example)'
        expected += '\n    - [Example 1](#example-1)'
        expected += '\n- [makeHeader](#make-header)'
        expect(toc(data)).toEqual(expected)
    })
})
