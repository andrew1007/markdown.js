/* eslint-disable @typescript-eslint/no-unused-vars */
import makeCodeBlock from "../makeCodeBlock"

describe('makeCodeBlock', () => {
    describe('_lineStart', () => {
        it('gets single line of code', () => {
            const { start, end, get } = makeCodeBlock({ spaces: 12 })
            start()
            const _hello = 'text'
            end()
            expect(get()).toEqual(`const _hello = 'text'`)
        })
        it('gets multi-line of code', () => {
            const { start, end, get } = makeCodeBlock({ spaces: 12 })
            start()
            const _hello = 'text'
            const dawg = () => {
                console.log('????')
            }
            end()
            const expected = `const _hello = 'text'
const dawg = () => {
    console.log('????')
}`
            expect(get()).toEqual(expected)
        })
        it('supports typescript', () => {
            const { start, end, get } = makeCodeBlock({ spaces: 12 })
            start()
            type _hello = 'text'
            const dawg = () => {
                console.log('????')
            }
            type hello = 'text'
            end()
            const expected = `type _hello = 'text'
const dawg = () => {
    console.log('????')
}
type hello = 'text'`
            expect(get()).toEqual(expected)
        })
        it('keeps comments', () => {
            const { start, end, get } = makeCodeBlock({ spaces: 12 })
            start()
            // comment
            const _hello = 'text'
            end()
            const expected = `// comment
const _hello = 'text'`
            expect(get()).toEqual(expected)
        })
    })
})
