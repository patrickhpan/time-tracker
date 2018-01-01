import { connect } from 'react-redux';
import _TimeGridBlock from 'components/TimeGridBlock';
import { selectors as gSelectors } from 'modules/grid'

const { getDragOver, getSelection } = gSelectors;
  
const mapStateToProps = (state, ownProps) => ({
    dragOver: getDragOver(state),
    selection: getSelection(state)
})


const mapDispatchToProps = {
    
}

const TimeGridBlock = connect(mapStateToProps, mapDispatchToProps)(_TimeGridBlock);
export default TimeGridBlock;