import React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { Box, Container, Typography, TextField, Button } from '@mui/material';

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
		}
	}
}));

const SignUp = () => {
	return (
		<Container maxWidth='sm' sx={{ backgroundColor: '#f7f7f7', padding: '3.5rem 1rem' }}>
			<Form>
				<Title variant='h6' component='h4'>
					Sign Up
				</Title>
				<RedditTextField size='small' label='username' placeholder='laura' id='name-input' variant='filled' fullWidth />
				<RedditTextField
					size='small'
					label='email'
					placeholder='example@test.com'
					id='email-input'
					variant='filled'
					fullWidth
				/>
				<RedditTextField size='small' label='password' id='password-input' variant='filled' fullWidth />
				<RedditTextField size='small' label='comfirm password' id='Confirmpassword-input' variant='filled' fullWidth />

				<LoginButton>Sign up</LoginButton>
			</Form>
		</Container>
	);
};

export default SignUp;
