
import { createSlice } from "@reduxjs/toolkit";

export const sortingSlice = createSlice({
  name: "sorting",
  initialState: {
    inputValue: "",
    array: [],
    sortedArray: [],
    sortOrder: "asc",
    sortingTime: null,
  },
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    setArray: (state, action) => {
      state.array = action.payload;
    },
    setSortedArray: (state, action) => {
      state.sortedArray = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
    setSortingTime: (state, action) => {
      state.sortingTime = action.payload;
    },
  },
});

export const {
  setInputValue,
  setArray,
  setSortedArray,
  setSortOrder,
  setSortingTime,
} = sortingSlice.actions;

export default sortingSlice.reducer;
