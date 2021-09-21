import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { natoursApi } from './API/natoursApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import AuthReducer from './Features/AuthSlice';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
	key: 'root',
	version: 1,
	storage,
	blacklist: [natoursApi.reducerPath]
};
const rootReducer = combineReducers({
	// Add the generated reducer as a specific top-level slice
	[natoursApi.reducerPath]: natoursApi.reducer,
	auth: AuthReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
	reducer: persistedReducer,
	// Adding the api middleware enables caching, invalidation, polling,
	// and other useful features of `rtk-query`.
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		}).concat(natoursApi.middleware)
});
setupListeners(store.dispatch);
