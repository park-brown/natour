import { configureStore } from '@reduxjs/toolkit';
import { natoursApi } from './API/natoursApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import AuthReducer from './Features/AuthSlice';
export const store = configureStore({
	reducer: {
		// Add the generated reducer as a specific top-level slice
		[natoursApi.reducerPath]: natoursApi.reducer,
		auth: AuthReducer
	},
	// Adding the api middleware enables caching, invalidation, polling,
	// and other useful features of `rtk-query`.
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(natoursApi.middleware)
});
setupListeners(store.dispatch);
