import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    searchText: "",
    sortBy: "",
    rangePrice: {
      minPrice: 0,
      maxPrice: 10000,
    },
  },
  reducers: {
    setSearchText(state, action) {
      state.searchText = action.payload;
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
    setRangePrice(state, action) {
      state.rangePrice = action.payload;
    },
  },
});

export const { setSearchText, setSortBy, setRangePrice } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;