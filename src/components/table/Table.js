import ExcelComponent from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.template'
import {$} from '@core/Dom'

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
        if (event.target.dataset.resize) {
            const $parent = $(event.target).closest('[data-type="resizable"]')
            const coords = $parent.getCoords()
            document.onmousemove = (e) => {
                const delta = e.pageX - coords.right
                const value = coords.width + delta
                $parent.setWidth(value)
                console.log('resizing...')
            }
            document.onmouseup = () => {
                document.onmousemove = null
            }
        }
    }
}
