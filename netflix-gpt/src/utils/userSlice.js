import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      return { ...action.payload }; // Updates the state with user info
    },
    removeUser: () => {
      return initialState; // Resets to initial state when the user logs out
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
