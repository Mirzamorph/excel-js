export default class DomListener {
    constructor($root) {
        if (!$root) {
            throw new Error('No root element was provided for DomListener!')
        }
        this.$root = $root
    }
}
