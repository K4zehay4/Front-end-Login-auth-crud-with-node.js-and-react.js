import { configureStore } from '@reduxjs/toolkit';
import autRedecer from "../features/authSlice.js";

export const store = configureStore({
  reducer: {
   auth:autRedecer
  },
}); 
