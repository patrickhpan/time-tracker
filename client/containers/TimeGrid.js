import { connect } from 'react-redux';
import _TimeGrid from 'components/TimeGrid';
import { operations as gOperations, selectors as gSelectors } from 'modules/grid'

const { getDragOver, getSelection, isDragging } = gSelectors;
const { endDrag } = gOperations;
  
const mapStateToProps = (state, ownProps) => ({
    dragOver: getDragOver(state),
    selection: getSelection(state),
    isDragging: isDragging(state)
})


const mapDispatchToProps = {
    endDrag
}

const TimeGrid = connect(mapStateToProps, mapDispatchToProps)(_TimeGrid);
export default TimeGrid;