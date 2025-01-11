import { configureStore } from '@reduxjs/toolkit';
import pizzaReducer from './OrderSlice';

const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
  },
});

export default store;