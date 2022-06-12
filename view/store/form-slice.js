import { createSlice } from '@reduxjs/toolkit';
import { amenitiesData, safetyItemsData, guestFavoritesData } from '../components/Hosting Form/CheckboxItems';

const initialState = {
  data: {
    place: '',
    propertyType: '',
    listingType: '',
    location: { latitude: '', longitude: '' },
    address: {
      street: '',
      aptSuite: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
    },
    guests: 0,
    beds: 0,
    bathrooms: 0,
    imageInfo: [],
    title:'',
    amenitiesArray: new Array(amenitiesData.length).fill(''),
    guestFavoritesArray: new Array(guestFavoritesData.length).fill(''),
    safetyItemsArray: new Array(safetyItemsData.length).fill(''),
    description:'',
    price: 0
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState: initialState,
  reducers: {
    updateData(state, action) {
      state.data = {
        ...state.data,
        [action.payload.type]: action.payload.newData,
      };
    },

    increaseFn(state, action) {
      if (action.payload === 'guests') {
        state.data.guests++;
      }

      if (action.payload === 'beds') {
        state.data.beds++;
      }

      if (action.payload === 'bathrooms') {
        state.data.bathrooms++;
      }
    },

    decreaseFn(state, action) {
        
      if (action.payload === 'guests') {
        if (state.data.guests > 0) {
          state.data.guests--;
        }
      }

      if (action.payload === 'beds') {
        if (state.data.beds > 0) {
          state.data.beds--;
        }
      }

      if (action.payload === 'bathrooms') {
        if (state.data.bathrooms > 0) {
          state.data.bathrooms--;
        }
      }
    },

    addImageInfoFn(state, action) {
      state.data.imageInfo.push(action.payload);
    },

    removeImageInfoFn(state, action) {
      state.data.imageInfo.splice(action.payload, 1);
    },

    addAmenitiesArray(state, action) {
      state.data.amenitiesArray = action.payload;
    },

    addGuestFavoritesArray(state, action) {
      state.data.guestFavoritesArray = action.payload;
    },

    addSafetyItemsArray(state, action) {
      state.data.safetyItemsArray = action.payload;
    }
  },
});

export const formActions = formSlice.actions;
export default formSlice;