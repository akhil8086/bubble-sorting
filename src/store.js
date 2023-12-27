
import { configureStore } from "@reduxjs/toolkit";
import sortingReducer from "./Components/Redux/sortingSlice.jsx";

export const store = configureStore({
  reducer: {
    sorting: sortingReducer,
  },
});
export default store;
