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
			providesTags: ['Tour'],
			transformResponse: (response) => response.data.data
		}),
		getAllReviewFromATour: builder.query({
			query: (id) => ({
				url: `tours/${id}/reviews`
			}),
			transformResponse: (response) => response.data.data
		}),
		login: builder.query({
			query: ({ email, password }) => ({
				url: 'users/login',
				method: 'POST',
				body: {
					email,
					password
				}
			})
		}),
		signUp: builder.mutation({
			query: ({ name, email, password, passwordConfirm }) => ({
				url: 'users/signup',
				method: 'POST',
				body: {
					name,
					email,
					password,
					passwordConfirm
				}
			})
		}),
		updateMe: builder.mutation({
			query: ({ token, values }) => ({
				url: 'users/updateMe',
				method: 'PATCH',
				headers: {
					authorization: `Bearer ${token}`
				},
				body: values
			})
		}),
		updateProfile: builder.mutation({
			query: ({ token, formdata }) => {
				return {
					url: 'users/updateMe',
					headers: {
						authorization: `Bearer ${token}`,
						'Access-Control-Allow-Origin': '*'
						//turn off content-type, works fine.
						// 'Content-Type': 'multipart/form-data'
					},
					method: 'PATCH',
					body: formdata
				};
			},
			transformResponse: (response) => response.data
		}),
		updatePassword: builder.mutation({
			query: ({ token, patch }) => ({
				url: 'users/updateMyPassword',
				method: 'PATCH',
				headers: {
					authorization: `Bearer ${token}`
				},
				body: patch
			})
		}),
		bookTour: builder.mutation({
			query: ({ id, token }) => ({
				url: `bookings/checkout-session/${id}`,
				headers: {
					authorization: `Bearer ${token}`
				}
			})
		})
	})
});

export const {
	useGetAllToursQuery,
	useGetAllReviewFromATourQuery,
	useLoginQuery,
	useSignUpMutation,
	useUpdateMeMutation,
	useUpdateProfileMutation,
	useUpdatePasswordMutation,
	useBookTourMutation
} = natoursApi;
