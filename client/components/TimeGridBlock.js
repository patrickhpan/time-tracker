import React from 'react';
import cn from 'classnames';

class TimeGridBlock extends React.Component {
    render() {
        const { mode, range } = this.props;
        const [ start, end ] = range[0] < range[1] ?
            [range[0], [range[1] + 1]] :
            [range[1], [range[0] + 1]]

        const className = cn(
            `tg-block`,
            `tg-block-start-${start}`,
            `tg-block-end-${end}`,
            `tg-block-mode-${mode}`
        )

        return <div className={className} />
    }

}

export default TimeGridBlock