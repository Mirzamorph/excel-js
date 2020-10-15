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

    findAll(selector) {
        return this.$el.querySelectorAll(selector)
    }

    css(styles = {}) {
        Object.keys(styles).forEach(key => {
            if (this.$el.style[key] !== undefined) {
                this.$el.style[key] = styles[key]
                return this
            }
            throw new Error(`Incorrect style property "${key}" for element ${this.$el.className}`)
        })
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
