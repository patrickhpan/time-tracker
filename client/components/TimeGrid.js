import React from 'react';
import cn from 'classnames'
import TimeGridLine from 'containers/TimeGridLine';
import TimeGridBlock from 'containers/TimeGridBlock';

class TimeGrid extends React.Component {

    mouseUpListener = null

    renderLine = (hour, quarter) => {
        const row = hour * 4 + quarter;
        let weight = 'normal';
        if (quarter === 0) { 
            weight = 'heavy'
        } else if (quarter === 2) {
            weight = 'medium'
        }
        return <TimeGridLine row={row} weight={weight} />
   }

    renderHour = (hour, ampm = false) => {
        const formattedHour = ampm === true ?
            ((hour + 11) % 12 + 1) + ( hour >= 12 ? 'PM' : 'AM' ) :
            ('0' + hour).slice(-2)
        const className = cn([
            'tg-hour',
            `tg-hour-${hour}`
        ])

        return <div key={`hour-${hour}`} className={className} children={formattedHour} />
    }

    componentWillReceiveProps(nextProps) {
        const { isDragging, endDrag } = this.props;
        const { isDragging: nextIsDragging } = nextProps
        if(isDragging !== nextIsDragging) {
            if(nextIsDragging) {
                window.addEventListener('mouseup', endDrag, true)
            } else {
                window.removeEventListener('mouseup', endDrag, true)
            }
        }
    }

    render() {
        const { selection, dragOver, isDragging } = this.props;

        let hours = [],
            lines = [];

        for(let hour = 0; hour < 24; hour++) {
            hours.push(this.renderHour(hour))
            for(let quarter = 0; quarter < 4; quarter++) {
                lines.push(this.renderLine(hour, quarter))
            }
        }
        
        const dragOverEl = Array.isArray(dragOver) ?
            <TimeGridBlock range={dragOver} mode='dragging' /> :
            null

        const selectionEl = Array.isArray(selection) ?
            <TimeGridBlock range={selection} mode='selected' /> :
            null

        return <div className="TimeGrid">
            { hours }
            { lines }
            { dragOverEl }
            { selectionEl }
        </div>

    }
}

export default TimeGrid;