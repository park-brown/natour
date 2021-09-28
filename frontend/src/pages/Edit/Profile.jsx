import React, { useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Button, Snackbar, Alert } from '@mui/material';

import { useUpdateProfileMutation } from '../../API/natoursApi';
import { updateUserProfile } from '../../Features/AuthSlice';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
const Input = styled('input')({
	display: 'none'
});
const validationSchema = yup.object({
	profile: yup.array().min(1, 'select at least 1 file')
});

const Profile = ({ user, token }) => {
	const dispatch = useDispatch();
	const isInitialMount = useRef(true);
	const [updateProfile, { data, isSuccess, isError }] = useUpdateProfileMutation();

	const formik = useFormik({
		initialValues: {
			profile: []
		},

		validationSchema: validationSchema
	});
	const handleProfileChange = async (event) => {
		const files = event.target.files;

		let myFiles = Array.from(files);

		await formik.setFieldValue('profile', myFiles[0]);
		formik.setFieldTouched('profile', true);
	};

	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
		} else {
			// Your useEffect code here to be run on update
			const profile = formik.values.profile;
			const formdata = new FormData();
			formdata.append('photo', profile);
			updateProfile({ token, formdata });
		}
	}, [formik.values.profile, token, updateProfile]);
	if (isSuccess) {
		const { user } = data;

		dispatch(updateUserProfile({ user }));
	}
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
			{isSuccess && (
				<Snackbar anchorOrigin={{ horizontal: 'center', vertical: 'top' }} open={isSuccess} autoHideDuration={1000}>
					<Alert variant='filled' severity='success' sx={{ boxShadow: 6 }}>
						profile changed :)
					</Alert>
				</Snackbar>
			)}
			{isError && (
				<Snackbar anchorOrigin={{ horizontal: 'center', vertical: 'top' }} open={isError} autoHideDuration={1000}>
					<Alert variant='filled' severity='error' sx={{ boxShadow: 6 }}>
						something went wrong :(
					</Alert>
				</Snackbar>
			)}
			<Typography variant='body1'>{user.name}</Typography>
			<label htmlFor='icon-button-file'>
				<Input accept='image/*' id='icon-button-file' type='file' name='profile' onChange={handleProfileChange} />
				<Button variant='text' component='span' sx={{ padding: 0 }}>
					choose new photo
				</Button>
			</label>
		</Box>
	);
};

export default Profile;
