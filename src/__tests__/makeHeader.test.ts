import makeHeader from "../makeHeader"

describe('makeHeader', () => {
    it('does not throw', () => {
        expect(() => makeHeader).not.toThrow()
    })
    it('creates basic header', () => {
        const h1 = makeHeader({ type: '#' })((str: string) => str)
        expect(h1('hello')).toEqual('# hello')
    })
    it('creates complex header', () => {
        const config = {
            type: '#' as const,
        }
        const h1 = makeHeader(config)((str: string) => {
            return `[h1] ${str}`
        })
        expect(h1('hello')).toEqual('# [h1] hello')
    })
    it('increments properly when makeHeader is called multiple times', () => {
        const config = {
            type: '#' as const,
        }
        const h1 = makeHeader(config)((str: string, inc) => {
            return `[1.${inc}] ${str}`
        })
        h1('Introduction')
        expect(h1('All About Types')).toEqual('# [1.2] All About Types')
    })
    it('supports complex arguments', () => {
        const config = {
            type: '##' as const,
        }
        type complexArg = {
            topic: string;
            description: string;
        }
        const h1 = makeHeader(config)((args: complexArg, inc) => {
            const { description, topic } = args
            return `[1.${inc}] ${topic}: ${description}`
        })
        const h1Data: complexArg = {
            topic: 'Type Coercion',
            description: 'A world of confusion'
        }
        expect(h1(h1Data)).toEqual('## [1.1] Type Coercion: A world of confusion')
    })
})
