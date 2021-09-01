type options = {

}

type data = ({ title: string; key: string } | data)[]
const makeTableOfContents = (options: options) => {
    const { } = options
    return (data: data) => {
        const create = (data: data, level = -1) => {
            const levelText = Array(Math.max(level, 0)).fill('  ').join('') + '- '
            if (Array.isArray(data)) {
                const elements: string[] = []
                for (const element of data) {
                    elements.push(create(element as data, level + 1))
                }
                return elements.join('\n')
            } else {
                const { title, key } = data
                return `${levelText}[${title}](#${key})`
            }
        }

        return create(data)
    }
}

export default makeTableOfContents
