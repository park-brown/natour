import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Box, Avatar, Typography, Button, InputBase } from '@mui/material';
import { useSelector } from 'react-redux';
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
const Input = styled('input')({
	display: 'none'
});
const EditAccount = () => {
	const { user, token } = useSelector((state) => state.auth);
	return (
		<LayOutContainer>
			<ListItem>
				<ProfilePic src={user.photo} />
				<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
					<Typography variant='body1'>{user.name}</Typography>
					<label htmlFor='icon-button-file'>
						<Input accept='image/*' id='icon-button-file' type='file' />

						<Button variant='text' component='span' sx={{ padding: 0 }}>
							choose new photo
						</Button>
					</label>
				</Box>
			</ListItem>
			<ListItem>
				<Typography variant='body1'>name</Typography>
				<CustomInputBase fullWidth />
			</ListItem>
			<ListItem>
				<Typography variant='body1'>email</Typography>
				<CustomInputBase fullWidth />
			</ListItem>
			<ListItem>
				<Typography variant='body1' sx={{ visibility: 'hidden' }}>
					email
				</Typography>
				<Button variant='contained' sx={{ alignSelf: 'center' }} disabled>
					submit
				</Button>
			</ListItem>
		</LayOutContainer>
	);
};

export default EditAccount;
