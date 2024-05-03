import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { firstname : null, username: null, token: null, },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUp: (state, action) => {
        state.value.firstname = action.payload.firstname;
        state.value.username = action.payload.username;
        state.value.token = action.payload.token;
      },
    login: (state, action) => {
      state.value.username = action.payload.username;
      state.value.token = action.payload.token;
    },
    logout: (state) => {
      state.value.token = null;
      state.value.username = null;
    },
  },
});

export const { signUp, login, logout } = userSlice.actions;
export default userSlice.reducer;
