import {$} from '@core/Dom'

export default class Excel {
    constructor(selector, options) {
        this.$el = $(selector)
        this.components = options.components || []

    }

    getRoot() {
        const $root = $.create('div', 'excel')

        this.components.forEach(Component => {
            const $el = $.create('div', Component.className)
            const component = new Component($el)
            console.log($el)
            $el.html(component.toHTML())
            $root.append($el)
        })

        return $root
    }


    render() {
        const $root = this.getRoot()
        this.$el.append($root)
    }
}
