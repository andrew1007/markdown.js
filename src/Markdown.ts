import fs from "fs"

export default class Markdown {
    elements: string[]

    constructor(elements: string[] = []) {
        this.elements = elements
    }

    add(element: string) {
        this.elements.push(element)
        return this
    }

    get text() {
        return this.elements.join('\n\n')
    }

    write(fileWithPath: string) {
        fs.writeFileSync(fileWithPath, this.text)
    }
}
