import ExcelComponent from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.template'
import {$} from '@core/Dom'
import {resizeHandler} from '@/components/table/table.resize'

export default class Table extends ExcelComponent {
    constructor($root) {
        super($root, {
            name: 'Header',
            listeners: ['mousedown']
        })
    }

    static className = 'excel__table table'

    toHTML() {
        return createTable(100)
    }

    onMousedown(event) {
        const target = $(event.target)
        resizeHandler(target, event, this.$root)
    }
}
