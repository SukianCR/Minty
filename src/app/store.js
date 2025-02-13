import { configureStore } from "@reduxjs/toolkit";

import plantsReducer from "../store-slices/plantSlice";
import gardenReducer from "../store-slices/gardenSlice";
import currentView from "../store-slices/currentViewSlice";
import mainArrays from "../store-slices/mainArraysSlice";

import plantsP from "../store-slices/plantsPSlice";
import grdn from "../store-slices/grdnSlice";

import { api } from "./api";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,

    plants: plantsReducer,
    garden: gardenReducer,
    currentView,
    mainArrays,

    plantsP,
    grdn,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
