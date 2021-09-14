import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Define a service using a base URL and expected endpoints
export const natoursApi = createApi({
	reducerPath: 'natoursApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://jonas-natour.herokuapp.com/api/v1/' }),
	tagTypes: ['Tour', 'User', 'Comment', 'Booking', 'Review'],
	endpoints: (builder) => ({
		getAllTours: builder.query({
			query: () => ({
				url: 'tours',
				headers: {
					'Content-Type': 'application/json'
				}
			}),
			transformResponse: (response) => response.data.data
		})
	})
});

export const { useGetAllToursQuery } = natoursApi;
