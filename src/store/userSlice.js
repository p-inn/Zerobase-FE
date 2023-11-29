import { createSlice } from '@reduxjs/toolkit';


let user = createSlice({
  name: 'user',
  initialState: {
    displayName: '',
    email: '',
    profileImg: '',
    isAdmin: false,
  },
  reducers: {
    setUserInfo(state, action) {
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.profileImg = action.payload.profileImg;
    },
    setUserInit(state) {
      state.displayName = '';
      state.email = '';
      state.profileImg = null;
    },
    setIsAdmin(state, action) {
      state.isAdmin = action.payload.isAdmin;
    },
  },
});


export const { setUserInfo, setUserInit, setIsAdmin } = user.actions;

export default user;
