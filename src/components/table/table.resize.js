import {$} from '@core/Dom'

export function resizeHandler($resizer, event, $root) {
    const resizerType = $resizer.data.resize
    if (!resizerType) return

    const $parent = $(event.target).closest('[data-type="resizable"]')
    const coords = $parent.getCoords()

    if (resizerType === 'col') {
        resizeColumns($root, $parent, $resizer, coords)
    } else {
        resizeRows($root, $parent, $resizer, coords)
    }
}

function resizeColumns($root, $parent, $resizer, coords) {
    const col = $parent.data.col
    const cols = $root.findAll(`[data-col="${col}"]`)
    let delta

    document.onmousemove = e => {
        delta = e.pageX - coords.right
        startResizing($root, $resizer, delta, true)
    }

    document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null

        const value = coords.width + delta
        cols.forEach(el => $(el).css({width: value + 'px'}))
        stopResizing($resizer, $root)
    }
}

function resizeRows($root, $parent, $resizer, coords) {
    let delta

    document.onmousemove = e => {
        delta = e.pageY - coords.bottom
        startResizing($root, $resizer, delta)
    }

    document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null

        const value = coords.height + delta
        $parent.css({height: value + 'px'})
        stopResizing($resizer, $root)
    }

}

function startResizing($root, $resizer, delta, isCol) {
    $root.findAll('[data-resize]')
        .forEach(el => $(el).css({opacity: 0}))

    const value = -delta + 'px'
    $resizer.css({
        opacity: 1,
        right: isCol ? value : -window.innerWidth + 'px',
        bottom: !isCol ? value : -window.innerHeight + 'px'
    })
}

function stopResizing($resizer, $root) {
    $root.findAll('[data-resize]')
        .forEach(el => $(el).css({opacity: ''}))

    $resizer.css({
        right: 0,
        bottom: 0
    })
}
