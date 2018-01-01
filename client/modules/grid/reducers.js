import * as types from './types';

const initialState = {
    dragStart: null,
    dragOver: null,
    dragSelection: null,
}

const reducer = (state = initialState, action) => {
    const { type, data = {}} = action;
    switch (type) {
        case types.startDrag: {
            const { row } = data;
            return {
                ...state,
                dragStart: row,
                dragSelection: null
            }
        }
        case types.dragOver: {
            const { row } = data;
            const { dragStart } = state;
            if(dragStart === null) {
                return {
                    ...state, 
                    dragSelection: null
                } 
            }
            return {
                ...state,
                dragOver: row,
                dragSelection: null
            }  
        }
        case types.endDrag: {
            const { dragStart, dragOver } = state;
            if(dragStart !== null && dragOver !== null) {
                return {
                    ...state,
                    dragSelection: [dragStart, dragOver],
                    dragStart: null,
                    dragOver: null
                }
            } 
            return {
                ...state,
                dragStart: null,
                dragOver: null
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;