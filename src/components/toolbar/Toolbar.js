import ExcelComponent from '@core/ExcelComponent'

export default class Toolbar extends ExcelComponent {
    static className = 'excel__toolbar'

    constructor($root) {
        super($root, {
            name: 'Toolbar',
            listeners: ['click']
        })
    }

    toHTML() {
        return `
        <button type="button" class="excel__toolbar-btn">
            <i class="material-icons">format_bold</i>
        </button>
        <button type="button" class="excel__toolbar-btn">
            <i class="material-icons">format_italic</i>
        </button>
        `
    }

    onClick(event) {
        console.log(event.target)
    }
}
