import ExcelComponent from '@core/ExcelComponent'

export default class Toolbar extends ExcelComponent {
    static className = 'excel__toolbar'

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
}
