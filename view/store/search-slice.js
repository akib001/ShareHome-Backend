import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectLocation: {
        location: {longitude: '', latitude: ''}
    },
    searchDetails: {}
}

const searchSlice = createSlice({
    name: 'search',
    initialState: initialState,
    reducers: {
        setSelectLocation(state, action) {
            state.selectLocation = action.payload
        },

        setSearchDetails(state, action) {
            state.searchDetails = action.payload
        }
    }
})

export const searchActions = searchSlice.actions;
export default searchSlice;