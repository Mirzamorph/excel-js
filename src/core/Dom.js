class Dom {
    constructor(selector) {
        this.$el = typeof selector === 'string'
            ? document.querySelector(selector)
            : selector
    }

    html(content) {
        this.$el.innerHTML = content
        return this
    }

    clear() {
        this.html('')
        return this
    }

    append(node) {
        if (node instanceof Dom) {
            node = node.$el
        }
        this.$el.append(node)
        return this
    }
}

export function $(selector) {
    return new Dom(selector)
}

$.create = (elementName, classes = null) => {
    const element = document.createElement(elementName)
    if (classes) {
        const classesArr = classes.split(' ')
        classesArr.forEach(className => {
            element.classList.add(className)
        })
    }
    return $(element)
}
