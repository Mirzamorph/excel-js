import ExcelComponent from '@core/ExcelComponent'

export default class Formula extends ExcelComponent {
    static className = 'excel__formula'

    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['input']
        })
    }

    toHTML() {
        return `
        <span class="excel__formula-heading">fx</span>
        <input type="text" class="excel__formula-input" spellcheck="false"/>
        `
    }

    onInput(event) {
        console.log(event)
    }
}
