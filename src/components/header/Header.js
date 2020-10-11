import ExcelComponent from '@core/ExcelComponent'

export default class Header extends ExcelComponent {
    constructor($root) {
        super($root, {
            name: 'Header',
            listeners: ['input']
        })
    }

    static className = 'excel__header'

    toHTML() {
        return `
        <input type="text" class="excel__title" value="Новая таблица">
        <div class="excel__buttons">
            <button type="button" class="excel__btn">
                <i class="material-icons">delete</i>
            </button>
            <button type="button" class="excel__btn">
                <i class="material-icons">exit_to_app</i>
            </button>
        </div>
        `
    }

    onInput() {
        console.log('Input event in header component')
    }
}
