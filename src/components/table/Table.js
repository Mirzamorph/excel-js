import ExcelComponent from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.template'

export default class Table extends ExcelComponent {
    static className = 'excel__table table'

    toHTML() {
        return createTable(100)
    }
}
