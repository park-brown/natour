import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Avatar, Typography, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useUpdateMeMutation } from '../../API/natoursApi';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { RedditTextField } from '../Login';
import { useDispatch } from 'react-redux';
import { updateUserProfile } from '../../Features/AuthSlice';
import Profile from './Profile';

const LayOutContainer = styled(Box, { name: 'edit-account-layout-container' })(({ theme }) => ({
	width: '100%',
	maxWidth: '475px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'flex-start',
	gap: '1rem'
}));
const ListItem = styled(Box, { name: 'edit-account-listItem' })(({ theme }) => ({
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-start',
	gap: '2rem'
}));
const ProfilePic = styled(Avatar, { name: 'profil-pic' })(({ theme }) => ({
	width: '48px',
	height: '48px'
}));

const Profile_URL = 'https://jonas-natour.herokuapp.com/img/users';

const validationSchema = yup.object({
	name: yup.string('Enter your name').min(3, 'user must have a name').max(15, 'name should be less than 15 characters'),

	email: yup.string('Enter your email').email('Enter a valid email')
});
const filterEmptyField = (values) => {
	const filterObj = {};
	Object.entries(values).forEach((el) => {
		if (el[1] !== '') {
			filterObj[el[0]] = el[1];
		}
	});
	return filterObj;
};
const EditAccount = () => {
	const dispatch = useDispatch();
	const [updateMe, { data, isSuccess, isLoading }] = useUpdateMeMutation();

	const { user, token } = useSelector((state) => state.auth);

	const formik = useFormik({
		initialValues: {
			name: '',
			email: ''
		},

		validationSchema: validationSchema,

		onSubmit: () => {
			const values = filterEmptyField(formik.values);

			updateMe({ token, values });
		}
	});
	let isValid = formik.dirty && formik.isValid;

	if (isSuccess) {
		const {
			data: { user }
		} = data;

		dispatch(updateUserProfile({ user }));
	}
	console.log(user.photo.trim());
	return (
		<LayOutContainer>
			<ListItem>
				<ProfilePic src={`${Profile_URL}/${user.photo}`} />
				<Profile user={user} token={token} />
			</ListItem>
			<ListItem>
				<RedditTextField
					label='name'
					fullWidth
					size='small'
					id='name-input'
					variant='filled'
					name='name'
					value={formik.values.name}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.name && Boolean(formik.errors.name)}
					helperText={formik.touched.name && formik.errors.name}
				/>
			</ListItem>
			<ListItem>
				<RedditTextField
					label='email'
					fullWidth
					size='small'
					id='email-input'
					variant='filled'
					name='email'
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
				/>
			</ListItem>
			<ListItem>
				<Typography variant='body1' sx={{ visibility: 'hidden' }}>
					email
				</Typography>
				<Button
					variant='contained'
					sx={{ alignSelf: 'center' }}
					disabled={!isValid || isLoading}
					onClick={formik.handleSubmit}>
					submit
				</Button>
			</ListItem>
		</LayOutContainer>
	);
};

export default EditAccount;
