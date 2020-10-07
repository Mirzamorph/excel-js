import ExcelComponent from '@core/ExcelComponent'

export default class Table extends ExcelComponent {
    static className = 'excel__table'

    toHTML() {
        return `
        <div class="table">
            <div class="table__info-row">
                <div class="table__info-col">#</div>
                <div class="table__info-col">A</div>
                <div class="table__info-col">B</div>
                <div class="table__info-col">C</div>
            </div>
            <div class="table__row">
            <div class="table__col table__col_index">1</div>
                <div class="table__col" contenteditable spellcheck="false"></div>
                <div class="table__col" contenteditable spellcheck="false"></div>
                <div class="table__col" contenteditable spellcheck="false"></div>
            </div>
            <div class="table__row">
                <div class="table__col table__col_index">1</div>
                <div class="table__col" contenteditable spellcheck="false"></div>
                <div class="table__col" contenteditable spellcheck="false"></div>
                <div class="table__col" contenteditable spellcheck="false"></div>
            </div>
        </div>
        `
    }
}
