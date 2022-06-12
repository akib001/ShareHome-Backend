import {configureStore} from '@reduxjs/toolkit';
import searchSlice from './search-slice';
import uiSlice from './ui-slice';
import formSlice from './form-slice';

const store = configureStore({
    reducer: { search: searchSlice.reducer, ui: uiSlice.reducer, form: formSlice.reducer}
})

export default store;