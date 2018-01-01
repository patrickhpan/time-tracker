import * as types from './types';

const startDrag = (row) => ({
    type: types.startDrag,
    data: {
        row
    }
})

const dragOver = (row) => ({
    type: types.dragOver,
    data: {
        row
    }
})

// const endDrag = () => ({
//     type: types.endDrag,
// })

const endDrag = () => {
    console.log("end drag")
    return {
    type: types.endDrag}
}

export {
    startDrag,
    endDrag,
    dragOver
}