// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */
import makeCodeBlock from "../makeCodeBlock"

describe('makeCodeBlock', () => {
    describe('start/end with js code block', () => {
        it('gets single line of code', () => {
            const { start, end, get } = makeCodeBlock({
                spaces: 12,
                language: 'javascript'
            })
            start()
            const _hello = 'text'
            end()
            const expected = `\`\`\`javascript
const _hello = 'text'
\`\`\``
            expect(get()).toEqual(expected)
        })
        it('gets multi-line of code', () => {
            const { start, end, get } = makeCodeBlock({
                spaces: 12,
                language: 'javascript'
            })
            start()
            const _hello = 'text'
            const dawg = () => {
                console.log('????')
            }
            end()
            const expected = `\`\`\`javascript
const _hello = 'text'
const dawg = () => {
    console.log('????')
}
\`\`\``
            expect(get()).toEqual(expected)
        })
        it('supports typescript', () => {
            const { start, end, get } = makeCodeBlock({
                spaces: 12,
                language: 'javascript'
            })
            start()
            type _hello = 'text'
            const dawg = () => {
                console.log('????')
            }
            type hello = 'text'
            end()
            const expected = `\`\`\`javascript
type _hello = 'text'
const dawg = () => {
    console.log('????')
}
type hello = 'text'
\`\`\``
            expect(get()).toEqual(expected)
        })
        it('keeps comments', () => {
            const { start, end, get } = makeCodeBlock({
                spaces: 12,
                language: 'javascript'
            })
            start()
            // comment
            const _hello = 'text'
            end()
            const expected = `\`\`\`javascript
// comment
const _hello = 'text'
\`\`\``
            expect(get()).toEqual(expected)
        })
        it('retains blank lines', () => {
            const { start, end, get } = makeCodeBlock({
                spaces: 12,
                language: 'javascript'
            })
            start()


            const _hello = 'text'
            end()
            const expected = `\`\`\`javascript


const _hello = 'text'
\`\`\``
            expect(get()).toEqual(expected)
        })
        it('retains complex types', () => {
            const { start, end, get } = makeCodeBlock({
                spaces: 12,
                language: 'typescript'
            })
            start()
            interface Hello {
                my: string;
                name: string;
            }
            const func = (args: Hello) => args
            end()
            const expected = `\`\`\`typescript
interface Hello {
    my: string;
    name: string;
}
const func = (args: Hello) => args
\`\`\``
            expect(get()).toEqual(expected)
        })
    })
    describe('start/end with code option', () => {
        it('imports a js file correctly', () => {
            const { get } = makeCodeBlock({
                spaces: 0,
                language: 'javascript',
                fileImport: './codeFiles/javascriptFile.js'
            })
            const expected = `\`\`\`javascript
const func = (arg) => arg

export default func

\`\`\``
            expect(get()).toEqual(expected)
        })
        it('imports a ts file correctly', () => {
            const { get } = makeCodeBlock({
                spaces: 0,
                language: 'javascript',
                fileImport: './codeFiles/typescriptFile.ts'
            })
            const expected = `\`\`\`javascript
type args = {
    tolerance: number;
}

const func = (arg: args) => arg

export default func

\`\`\``
            expect(get()).toEqual(expected)
        })
        it('imports a bash correctly', () => {
            const { get } = makeCodeBlock({
                spaces: 0,
                language: 'bash',
                fileImport: './codeFiles/bashFile.sh'
            })
            const expected = `\`\`\`bash
npm test
\`\`\``
            expect(get()).toEqual(expected)
        })
    })
})
