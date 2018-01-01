import { connect } from 'react-redux';
import _TimeGridLine from 'components/TimeGridLine';
import { selectors as gSelectors, operations as gOperations } from 'modules/grid';

const { startDrag, dragOver } = gOperations
const { isDragging } = gSelectors

const mapStateToProps = (state, ownProps) => ({
    isDragging: isDragging(state)
})


const mapDispatchToProps = (dispatch, ownProps) => ({
    startDrag: () => dispatch(startDrag(ownProps.row)),
    dragOver: () => dispatch(dragOver(ownProps.row)),
})

const TimeGridLine = connect(mapStateToProps, mapDispatchToProps)(_TimeGridLine);
export default TimeGridLine;