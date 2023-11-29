import { configureStore } from '@reduxjs/toolkit';
import cart from './cartSlice.js';
import user from './userSlice.js';
import loading from './loadingSlice.js';
import like from './likeSlice.js';
import orders from './adminOrdersSlice.js';
import products from './adminProductsSlice.js';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage : storage, 
  whitelist: ['cart', 'user', 'like'], 
  blacklist: ['loading', 'orders', 'products'], 
};

const reducer = combineReducers({
  cart: cart.reducer,
  user: user.reducer,
  loading: loading.reducer,
  like: like.reducer,
  orders: orders.reducer,
  products: products.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);


const store = configureStore({

  reducer: persistedReducer,
});

export default store;
