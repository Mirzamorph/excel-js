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
        const resize = event.target.dataset.resize
        if (resize) {
            const $parent = $(event.target).closest('[data-type="resizable"]')
            const coords = $parent.getCoords()

            if (resize === 'col') {
                const col = $parent.data.col
                const cols = this.$root.$el.querySelectorAll(`[data-col="${col}"]`)
                document.onmousemove = (e) => {
                    const delta = e.pageX - coords.right
                    const value = coords.width + delta
                    cols.forEach(el => $(el).setWidth(value))
                }
            } else {
                document.onmousemove = (e) => {
                    const delta = e.pageY - coords.bottom
                    console.log(e.pageY, coords.bottom)
                    const value = coords.height + delta
                    $parent.$el.style.height = value + 'px'
                }
            }

            document.onmouseup = () => {
                document.onmousemove = null
            }
        }
    }
}
