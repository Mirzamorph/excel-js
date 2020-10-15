const CODE = {
    A: 65,
    Z: 90
}

const columnCount = CODE.Z - CODE.A + 1

function createInfoCol(_, index) {
    return `
        <div class="table__column-info" data-type="resizable" data-col="${index}">
            ${String.fromCharCode(CODE.A + index)}
            <div class="table__col-resize" data-resize="col"></div>
        </div>
    `
}

function createCol(content = '', index) {
    return `<div class="table__column" contenteditable="true" spellcheck="false" data-col="${index}">${content}</div>`
}

function createRow(index, cols) {
    const resize = index !== '#' ? '<div class="table__row-resize" data-resize="row"></div>' : ''
    return `
        <div class="table__row" data-type="resizable">
            <div class="table__row-info">
                ${index}
                ${resize}
            </div>
            ${cols}
        </div>
    `
}

function generateColumn(count, fn) {
    return new Array(columnCount)
        .fill('')
        .map(fn)
        .join('')
}

export function createTable(rowCount = 20) {
    const rows = []

    const infoCols = generateColumn(columnCount, createInfoCol)
    rows.push(createRow('#', infoCols))


    for (let i = 1; i <= rowCount; i++) {
        const cols = generateColumn(columnCount, createCol)
        rows.push(createRow(i, cols))
    }

    return rows.join('')
}
