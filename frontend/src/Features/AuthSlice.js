import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
	name: 'auth',
	initialState: { user: null, token: null },
	reducers: {
		setCredentials: (state, { payload: { user, token } }) => {
			const { name, role, _id, email, photo } = user;
			state.user = {
				name,
				role,
				email,
				_id,
				photo
			};
			state.token = token;
		},
		updateUserProfile: (state, { payload: { user } }) => {
			const { name, email, photo } = user;
			state.user.name = name;
			state.user.email = email;
			state.user.photo = photo;
		},
		updateUserPassword: (state, { payload: { token } }) => {
			state.token = token;
		},
		logOut: (state) => {
			state.user = null;
			state.token = null;
		}
	}
});
export const { setCredentials, updateUserProfile, updateUserPassword, logOut } = AuthSlice.actions;

export default AuthSlice.reducer;
