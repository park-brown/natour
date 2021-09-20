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
import { useLoginQuery } from '../API/natoursApi';
import { setCredentials } from '../Features/AuthSlice';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import * as yup from 'yup';
const Form = styled(Box, { name: 'login-form-container' })(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		position: 'relative',
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
const ForgetPasswordButton = styled(Button, { name: 'forget-password-button' })(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		...theme.typography.body2,
		color: '#55c57a',
		textTransform: 'lowercase',
		transition: `${theme.transitions.create(['transform'], {
			duration: theme.transitions.duration.standard
		})}`,
		'&:hover': {
			textDecoration: 'underline',
			transform: 'translateY(-3px)'
		}
	}
}));
const validationSchema = yup.object({
	email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
	password: yup
		.string('Enter your password')
		.min(8, 'Password should be of minimum 8 characters length')
		.required('Password is required')
});
const Login = () => {
	useEffect(() => {
		document.title = 'natour | login';
	});
	const dispatch = useDispatch();
	const history = useHistory();
	const [showPassword, toggleShowPassword] = useState(true);
	const [skip, setSkip] = useState(true);
	const [isDisable, setDisable] = useState(false);

	const handleClickShowPassword = () => {
		toggleShowPassword((pre) => !pre);
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: validationSchema,
		onSubmit: () => {
			// set login button disable state to true
			setDisable(true);
			// trigger query hook
			setSkip(false);
		}
	});
	let isValid = formik.dirty && formik.isValid;
	const queryArg = {
		email: formik.values.email,
		password: formik.values.password
	};
	const { data, isError, isSuccess } = useLoginQuery(queryArg, { skip: skip });
	if (isError) {
		formik.errors.email = 'incorrect email or password';
		formik.errors.password = 'incorrect email or password';
		setSkip(true);
		setDisable(false);
	}
	if (isSuccess) {
		const {
			token,
			data: { user }
		} = data;
		// had to pass dispatch into setTimeout, otherwise throw error 'https://github.com/facebook/react/issues/18178#issuecomment-595846312'
		setTimeout(() => {
			dispatch(setCredentials({ token, user }));
			history.push('/');
		}, 1000);
	}

	return (
		<Container maxWidth='sm' sx={{ backgroundColor: '#f7f7f7', padding: '3.5rem 1rem', height: '100vh' }}>
			<Form>
				{isSuccess && (
					<Snackbar anchorOrigin={{ horizontal: 'center', vertical: 'top' }} open={isSuccess}>
						<Alert variant='filled' severity='success' sx={{ boxShadow: 6 }}>
							Successfully log in!
						</Alert>
					</Snackbar>
				)}
				{isError && (
					<Snackbar anchorOrigin={{ horizontal: 'center', vertical: 'top' }} open={isError}>
						<Alert variant='filled' severity='error' sx={{ boxShadow: 6 }}>
							log in failed, please try again!
						</Alert>
					</Snackbar>
				)}
				<Title variant='h6' component='h4'>
					Login
				</Title>
				<RedditTextField
					size='small'
					label='email'
					placeholder='example@test.com'
					variant='filled'
					fullWidth
					id='email'
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
					id='password-input'
					name='password'
					value={formik.values.password}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
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
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						flexDirection: { xs: 'column', sm: 'row' },
						gap: '1rem',
						alignItems: 'center',
						justifyContent: 'space-between'
					}}>
					<LoginButton type='submit' onClick={formik.handleSubmit} disabled={!isValid || isDisable}>
						Login
					</LoginButton>
					<ForgetPasswordButton disableRipple>forget password?</ForgetPasswordButton>
				</Box>
			</Form>
		</Container>
	);
};

export default Login;
