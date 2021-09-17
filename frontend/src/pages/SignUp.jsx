import React, { useState, useEffect } from 'react';
import { alpha, styled } from '@mui/material/styles';
import {
	Box,
	Container,
	Typography,
	TextField,
	Button,
	InputAdornment,
	IconButton,
	Snackbar,
	Alert
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSignUpMutation } from '../API/natoursApi';
import { setCredentials } from '../Features/AuthSlice';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
const Form = styled(Box, { name: 'login-form-container' })(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		width: '100%',
		maxWidth: '35rem',
		backgroundColor: theme.palette.common.white,
		borderRadius: '4px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
		gap: '1rem',
		margin: '0 auto',
		padding: '3.125rem 4.375rem'
	}
}));
const Title = styled(Typography, { name: 'login-title' })(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		display: 'block',
		backgroundImage: 'linear-gradient(to right, #7dd56f, #28b487)',
		backgroundClip: 'text',
		color: 'transparent',
		cursor: 'pointer',
		textTransform: 'uppercase'
	}
}));
const RedditTextField = styled((props) => <TextField InputProps={{ disableUnderline: true }} {...props} />)(
	({ theme }) => ({
		'& .MuiFilledInput-root': {
			border: '1px solid #e2e2e1',
			overflow: 'hidden',
			borderRadius: 4,
			backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
			transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
			'&:hover': {
				backgroundColor: 'transparent'
			},
			'&.Mui-focused': {
				backgroundColor: 'transparent',
				boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
				borderColor: theme.palette.primary.main
			}
		}
	})
);
const LoginButton = styled(Button, { name: 'login-button' })(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		...theme.typography.body2,
		padding: '0.5rem 1rem',
		backgroundColor: '#55c57a',
		color: theme.palette.common.white,
		borderRadius: '30rem',
		transition: `${theme.transitions.create(['transform', 'boxShadow'], {
			duration: theme.transitions.duration.standard
		})}`,
		'&:hover': {
			backgroundColor: theme.palette.success.light,
			transform: 'translateY(-3px)',
			boxShadow: theme.shadows[1]
		},
		'&.Mui-disabled': {
			backgroundColor: theme.palette.success.light,
			transform: 'translateY(-3px)',
			boxShadow: theme.shadows[1],
			opacity: 0.6,
			color: theme.palette.common.white
		}
	}
}));
const validationSchema = yup.object({
	name: yup
		.string('Enter your name')
		.min(3, 'user must have a name')
		.max(15, 'name should be less than 15 characters')
		.required('user must have a name'),
	email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
	password: yup
		.string('Enter your password')
		.min(8, 'Password should be of minimum 8 characters length')
		.required('Password is required'),
	passwordConfirm: yup
		.string('Enter your confirm password')
		.min(8, 'Password should be of minimum 8 characters length')
		.required('Confirm Password is required')
});

const SignUp = () => {
	useEffect(() => {
		document.title = 'natour | signup';
	});
	const dispatch = useDispatch();
	const history = useHistory();
	const [showPassword, toggleShowPassword] = useState(true);

	const handleClickShowPassword = () => {
		toggleShowPassword((pre) => !pre);
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
			passwordConfirm: ''
		},

		validationSchema: validationSchema,

		onSubmit: ({ name, email, password, passwordConfirm }) => {
			signUp({
				name,
				email,
				password,
				passwordConfirm
			});
		},
		validate: () => {
			if (formik.values.password !== formik.values.passwordConfirm) {
				return {
					passwordConfirm: 'confirm password and password are not the same'
				};
			} else return;
		}
	});
	let isValid = formik.dirty && formik.isValid;
	const [signUp, { data, isSuccess, isError, isLoading }] = useSignUpMutation();
	if (isSuccess) {
		const {
			token,
			data: { user }
		} = data;
		dispatch(setCredentials({ token, user }));
		setTimeout(() => history.push('/'), 1000);
	}
	return (
		<Container maxWidth='sm' sx={{ backgroundColor: '#f7f7f7', padding: '3.5rem 1rem', height: '100vh' }}>
			<Form>
				{isSuccess && (
					<Snackbar anchorOrigin={{ horizontal: 'center', vertical: 'top' }} open={isSuccess} autoHideDuration={600}>
						<Alert variant='filled' severity='success' sx={{ boxShadow: 6 }}>
							Successfully sign up!
						</Alert>
					</Snackbar>
				)}
				{isError && (
					<Snackbar anchorOrigin={{ horizontal: 'center', vertical: 'top' }} open={isError} autoHideDuration={600}>
						<Alert variant='filled' severity='error' sx={{ boxShadow: 6 }}>
							sign up failed. please try again.
						</Alert>
					</Snackbar>
				)}

				<Title variant='h6' component='h4'>
					Sign Up
				</Title>
				<RedditTextField
					size='small'
					label='username'
					placeholder='laura'
					id='name-input'
					variant='filled'
					fullWidth
					name='name'
					value={formik.values.name}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.name && Boolean(formik.errors.name)}
					helperText={formik.touched.name && formik.errors.name}
				/>
				<RedditTextField
					size='small'
					label='email'
					placeholder='example@test.com'
					id='email-input'
					variant='filled'
					fullWidth
					name='email'
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
				/>
				<RedditTextField
					size='small'
					label='password'
					type={showPassword ? 'password' : 'text'}
					id='password-input'
					name='password'
					value={formik.values.password}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
					variant='filled'
					fullWidth
					InputProps={{
						disableUnderline: true,
						endAdornment: (
							<InputAdornment position='end'>
								<IconButton
									aria-label='toggle password visibility'
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge='end'>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						)
					}}
				/>
				<RedditTextField
					size='small'
					label='comfirm password'
					id='passwordConfirm-input'
					name='passwordConfirm'
					value={formik.values.passwordConfirm}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.passwordConfirm && Boolean(formik.errors.passwordConfirm)}
					helperText={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
					variant='filled'
					fullWidth
					type={showPassword ? 'password' : 'text'}
					InputProps={{
						disableUnderline: true,
						endAdornment: (
							<InputAdornment position='end'>
								<IconButton
									aria-label='toggle password visibility'
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge='end'>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						)
					}}
				/>

				<LoginButton onClick={formik.handleSubmit} disabled={!isValid || isLoading}>
					Sign up
				</LoginButton>
			</Form>
		</Container>
	);
};

export default SignUp;
