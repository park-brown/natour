import { configureStore } from '@reduxjs/toolkit';
import { natoursApi } from './API/natoursApi';
export const store = configureStore({
	reducer: {
		// Add the generated reducer as a specific top-level slice
		[natoursApi.reducerPath]: natoursApi.reducer
	},
	// Adding the api middleware enables caching, invalidation, polling,
	// and other useful features of `rtk-query`.
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(natoursApi.middleware)
});
