import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showModal: false,
  showModalHostingDetails: false,
  showMenuModal: false,
  showEditModal: false,
  token: '',
  userLoggedIn: false,
  userEmail: '',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
    setShowModal(state) {
      state.showModal = !state.showModal;
    },

    setshowModalHostingDetails(state) {
      state.showModalHostingDetails = !state.showModalHostingDetails;
    },

    setShowMenuModal(state) {
      state.showMenuModal = !state.showMenuModal;
    },

    setShowEditModal(state) {
      state.showEditModal = !state.showEditModal;
    },

    retriveUserData(state, action) {
        state.token = action.payload.token;
        state.userEmail = action.payload.userEmail;
    },

    isUserLoggedIn(state) {
      state.userLoggedIn = !!state.token;
    },

    userLogin(state, action) {
      state.token = action.payload.token;
      state.userEmail = action.payload.userEmail;
      localStorage.setItem('token', state.token);
      localStorage.setItem('userEmail', state.userEmail);
    },

    userLogout(state) {
      state.token = '';
      state.userEmail = '';

      localStorage.removeItem('token');
      localStorage.removeItem('userEmail');
    },

    setUserProfile(state, action) {
      state.userName = action.payload.name;
      state.userEmail = action.payload.email;
      localStorage.setItem('userName', state.userName);
      localStorage.setItem('userEmail', state.userEmail);
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
