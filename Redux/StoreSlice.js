import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getTimes = createAsyncThunk(
  "times/getTimes",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await fetch(
        "https://gist.githubusercontent.com/sefatanam/79dd88f323a4b720483d58862887b336/raw/23ad0324cf636e46bdb35cf45020c87901dc08da/ramadan_ifter_sahri_time.json"
      );
      const Data = await res.json();
      return Data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const StoreSlice = createSlice({
  name: "times",
  initialState: {
    DataTimes: [],
    isloading: null,
  },
  reducers: {},
  extraReducers: {
    [getTimes.pending]: (state, action) => {
      state.isloading = true;
    },
    [getTimes.fulfilled]: (state, action) => {
      state.isloading = false;
      state.DataTimes = action.payload;
    },
    [getTimes.rejected]: (state, action) => {
      state.isloading = false;
      state.DataTimes = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = StoreSlice.actions;

export default StoreSlice.reducer;
