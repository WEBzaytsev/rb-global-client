import { createSlice } from "@reduxjs/toolkit";

interface ToggleState {
  value: boolean;
}

const initialState: ToggleState = {
  value: false,
};

export const toggleMenuSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleMenu: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggleMenu } = toggleMenuSlice.actions;
export default toggleMenuSlice.reducer;
