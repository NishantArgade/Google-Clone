import { createSlice } from "@reduxjs/toolkit";
import { ERROR, IDLE, LOADING } from "./Constants.js";

export const googleSlice = createSlice({
  name: "google",
  initialState: {
    results: [],
    searchTerm: "Elon Musk",
    status: "",
    darkTheme: false,
  },
  reducers: {
    setResults: (state, action) => {
      state.results = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },

    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setDarkTheme: (state, action) => {
      state.darkTheme = action.payload;
    },
  },
});

export const { setResults, setStatus, setSearchTerm, setDarkTheme } =
  googleSlice.actions;

export default googleSlice.reducer;

export function getResults(type) {
  return async function getResultsThunk(dispatch, getState) {
    dispatch(setStatus(LOADING));
    try {
      const baseURL = "https://google-search3.p.rapidapi.com/api/v1";
      const resp = await fetch(`${baseURL}${type}`, {
        method: "GET",
        headers: {
          "X-User-Agent": "desktop",
          "X-Proxy-Location": "EU",
          "X-RapidAPI-Key": import.meta.env.VITE_GOOGLE_API_KEY,
          "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        },
      });

      const data = await resp.json();

      if (type.includes("/news")) {
        dispatch(setResults(data.entries));
      } else if (type.includes("/image")) {
        dispatch(setResults(data.image_results));
      } else {
        dispatch(setResults(data.results));
      }

      dispatch(setStatus(IDLE));
    } catch (error) {
      dispatch(setStatus(ERROR));
    }
  };
}
