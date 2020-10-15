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

    on(eventType, callback) {
        this.$el.addEventListener(eventType, callback)
    }

    off(eventType, callback) {
        this.$el.removeEventListener(eventType, callback)
    }

    closest(selector) {
        return $(this.$el.closest(selector))
    }

    getCoords() {
        return this.$el.getBoundingClientRect()
    }

    get data() {
        return this.$el.dataset
    }

    setWidth(width) {
        if (typeof width !== 'number') throw new Error(`Incorrect width for element ${this.$el}`)
        return this.$el.style.width = `${width}px`
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
