class Dom {}

export function $() {
    return new Dom()
}

$.create = (elementName, classes = null) => {
    const element = document.createElement(elementName)
    if (classes) {
        const classesArr = classes.split(' ')
        classesArr.forEach(className => {
            element.classList.add(className)
        })
    }
    return element
}
