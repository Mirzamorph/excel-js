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

    resizeColumn

    onMousedown(event) {
        if (event.target.dataset.resize) {
            const $parent = $(event.target).closest('[data-type="resizable"]')
            const coords = $parent.getCoords()
            document.onmousemove = (e) => {
                if (typeof movewait !== 'undefined') {
                    clearTimeout(movewait)
                }
                const movewait = setTimeout(() => {
                    const delta = e.pageX - coords.right
                    const column = $parent.data.col
                    const value = coords.width + delta
                    // $parent.setWidth(value)
                    console.log('reszing')
                    document.querySelectorAll(`[data-col="${column}"]`)
                        .forEach(el => $(el).setWidth(value))
                }, 100)
            }
            document.onmouseup = () => {
                document.onmousemove = null
            }
        }
    }
}
