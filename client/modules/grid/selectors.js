const isDragging = state => state.grid.dragStart !== null
const getDragOver = state => ( state.grid.dragStart !== null && state.grid.dragOver !== null) ?
    [state.grid.dragStart, state.grid.dragOver] :
    null;
const getSelection = state => state.grid.dragSelection;

export {
    getSelection,
    getDragOver,
    isDragging
}