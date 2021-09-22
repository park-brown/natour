import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Box, Typography, Button, InputBase } from '@mui/material';
import { useSelector } from 'react-redux';

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
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		gap: theme.spacing(1),
		textAlign: 'right'
	},
	[theme.breakpoints.up('sm')]: {
		flexDirection: 'row',
		gap: '2rem',
		'& .MuiTypography-root': {
			flexBasis: '10rem'
		}
	}
}));

const CustomInputBase = styled(InputBase, { name: 'custom-input-base' })(({ theme }) => ({
	border: '1px solid #e2e2e1',
	overflow: 'hidden',
	borderRadius: 4,
	paddingLeft: theme.spacing(2),
	maxWidth: '350px',
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
}));
const ChangePassword = () => {
	const { token } = useSelector((state) => state.auth);
	return (
		<LayOutContainer>
			<ListItem>
				<Typography variant='body1'>Old password</Typography>
				<CustomInputBase fullWidth />
			</ListItem>
			<ListItem>
				<Typography variant='body1'>New password</Typography>
				<CustomInputBase fullWidth />
			</ListItem>
			<ListItem>
				<Typography variant='body1'>Confirm new password</Typography>
				<CustomInputBase fullWidth />
			</ListItem>
			<ListItem>
				<Typography variant='body1' sx={{ visibility: 'hidden' }}>
					Confirm new password
				</Typography>
				<Button variant='contained' sx={{ alignSelf: 'center' }} disabled>
					change password
				</Button>
			</ListItem>
		</LayOutContainer>
	);
};

export default ChangePassword;
