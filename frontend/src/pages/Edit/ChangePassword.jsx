import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Snackbar, Alert } from '@mui/material';
import { useSelector } from 'react-redux';
import { RedditTextField } from '../Login';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useUpdatePasswordMutation } from '../../API/natoursApi';
import { updateUserPassword } from '../../Features/AuthSlice';
import { useDispatch } from 'react-redux';
const LayOutContainer = styled(Box, { name: 'edit-account-layout-container' })(({ theme }) => ({
	width: '100%',

	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'flex-start',
	gap: '1rem'
}));
const ListItem = styled(Box, { name: 'edit-account-listItem' })(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		width: '100%',
		maxWidth: '300px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		gap: theme.spacing(1),
		textAlign: 'right'
	},
	[theme.breakpoints.up('sm')]: {
		width: '100%',
		maxWidth: '50%',
		flexDirection: 'row',
		justifyContent: 'center',
		gap: '2rem',
		'& .MuiTypography-root': {
			flexBasis: '10rem'
		}
	}
}));

const validationSchema = yup.object({
	passwordCurrent: yup
		.string('Enter your current password')
		.min(8, 'Password should be of minimum 8 characters length')
		.required('Password is required'),

	password: yup
		.string('Enter your new password')
		.min(8, 'Password should be of minimum 8 characters length')
		.required('Password is required'),
	passwordConfirm: yup
		.string('confirm your new password')
		.min(8, 'Password should be of minimum 8 characters length')
		.required('Password is required')
});
const ChangePassword = () => {
	const dispatch = useDispatch();
	const { token } = useSelector((state) => state.auth);
	const [updatePassword, { data, isSuccess, isError, isLoading }] = useUpdatePasswordMutation();
	const formik = useFormik({
		initialValues: {
			passwordCurrent: '',
			password: '',
			passwordConfirm: ''
		},

		validationSchema: validationSchema,
		validate: () => {
			if (formik.values.password !== formik.values.passwordConfirm) {
				return {
					passwordConfirm: 'confirm password and password are not the same'
				};
			}
		},

		onSubmit: ({ passwordCurrent, password, passwordConfirm }) => {
			const patch = {
				passwordCurrent,
				password,
				passwordConfirm
			};
			updatePassword({ token, patch });
		}
	});
	let isValid = formik.dirty && formik.isValid;

	if (isSuccess) {
		const { token } = data;
		dispatch(updateUserPassword({ token }));
	}

	return (
		<LayOutContainer>
			{isSuccess && (
				<Snackbar anchorOrigin={{ horizontal: 'center', vertical: 'top' }} open={isSuccess} autoHideDuration={600}>
					<Alert variant='filled' severity='success' sx={{ boxShadow: 6 }}>
						password reset success!
					</Alert>
				</Snackbar>
			)}
			{isError && (
				<Snackbar anchorOrigin={{ horizontal: 'center', vertical: 'top' }} open={isError}>
					<Alert variant='filled' severity='error' sx={{ boxShadow: 6 }}>
						your current password is incorrect.
					</Alert>
				</Snackbar>
			)}
			<ListItem>
				<RedditTextField
					label='current password'
					fullWidth
					id='current password'
					name='passwordCurrent'
					variant='filled'
					value={formik.values.passwordCurrent}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.passwordCurrent && Boolean(formik.errors.passwordCurrent)}
					helperText={formik.touched.passwordCurrent && formik.errors.passwordCurrent}
				/>
			</ListItem>
			<ListItem>
				<RedditTextField
					label='new password'
					fullWidth
					variant='filled'
					id='new password'
					name='password'
					value={formik.values.password}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
				/>
			</ListItem>
			<ListItem>
				<RedditTextField
					label='confirm new password'
					fullWidth
					variant='filled'
					id='confirm new password'
					name='passwordConfirm'
					value={formik.values.passwordConfirm}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.passwordConfirm && Boolean(formik.errors.passwordConfirm)}
					helperText={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
				/>
			</ListItem>
			<ListItem>
				<Button
					variant='contained'
					sx={{ alignSelf: 'center' }}
					onClick={formik.handleSubmit}
					disabled={!isValid || isLoading}>
					change password
				</Button>
			</ListItem>
		</LayOutContainer>
	);
};

export default ChangePassword;
