import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
	name: 'auth',
	initialState: { user: null, token: null },
	reducers: {
		setCredentials: (state, { payload: { user, token } }) => {
			const { name, role, _id, email } = user;
			state.user = {
				name,
				role,
				email,
				_id
			};
			state.token = token;
		}
	}
});
export const { setCredentials } = AuthSlice.actions;

export default AuthSlice.reducer;
