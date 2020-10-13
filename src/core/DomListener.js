import {capitalize} from '@core/utils'

export default class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error('No root element was provided for DomListener!')
        }
        this.$root = $root
        this.listeners = listeners
    }

    initDOMListeners() {
        this.listeners.forEach(listener => {
            const method = setMethodName(listener)
            if (!this[method]) {
                throw new Error(`Method ${method} is not implemented on ${this.name} Component`)
            }
            this[method] = this[method].bind(this)
            this.$root.on(listener, this[method])
        })
    }

    removeDOMListeners() {
        this.listeners.forEach(listener => {
            const method = setMethodName(listener)
            this.$root.off(listener, this[method])
        })
    }

}

function setMethodName(method) {
    return 'on' + capitalize(method)
}
