import { createSlice } from '@reduxjs/toolkit'

const initialValue = {

}
export const commonSlice = createSlice({
    name: 'commonlo',
    initialState: initialValue,
    reducers: {
        updateState: (state, action) => {
            assignValueInState(action.payload, state)
        },
        resetState: (state) => {
            assignValueInState(initialValue, state)
        },
    },
})

const assignValueInState = (obj, state) => {
    for (const key in obj) { state[key] = obj[key] }
}

export const { updateState, resetState } = commonSlice.actions
export default commonSlice.reducer


// dispatch(updateState({ value: 25 }))
// dispatch(resetState())

// const commonReducer = useSelector((state) => state.commonReducer);
