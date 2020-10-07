import ExcelComponent from '@core/ExcelComponent'

export default class Formula extends ExcelComponent {
    static className = 'excel__formula'

    toHTML() {
        return `
        <span class="excel__formula-heading">fx</span>
        <input type="text" class="excel__formula-input" spellcheck="false"/>
        `
    }
}
