import React from 'react';
import cn from 'classnames';

const TimeGridLine = ({ row, weight, startDrag, dragOver, isDragging }) => {
    const className = cn([
        `tg-line`,
        `tg-line-${row}`, // 1-index to match CSS Grid
        `tg-line-${weight}`
    ])
    const key = `line-${row}`

    const mouseOverProp = isDragging === true ?
        { onMouseOver: dragOver } :
        {}

    return <div key={key} className={className} onMouseDown={startDrag} {...mouseOverProp} />
}

export default TimeGridLine;