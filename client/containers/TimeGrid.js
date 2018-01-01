import { connect } from 'react-redux';
import _TimeGrid from 'components/TimeGrid';
import { selectors as gSelectors } from 'modules/grid'

const { getDragOver, getSelection } = gSelectors;
  
const mapStateToProps = (state, ownProps) => ({
    dragOver: getDragOver(state),
    selection: getSelection(state)
})


const mapDispatchToProps = {
    
}

const TimeGrid = connect(mapStateToProps, mapDispatchToProps)(_TimeGrid);
export default TimeGrid;