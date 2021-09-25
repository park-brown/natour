import React from 'react';
import { styled } from '@mui/material/styles';
import {
	Box,
	Avatar,
	Typography,
	Popper,
	Paper,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText
} from '@mui/material';
import { useHistory } from 'react-router';
import { logOut } from '../../Features/AuthSlice';
import { useDispatch } from 'react-redux';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PersonIcon from '@mui/icons-material/Person';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SettingsIcon from '@mui/icons-material/Settings';
const UserBox = styled(Box, { name: 'user-box' })(({ theme }) => ({
	width: '175px',
	height: '48px',
	marginLeft: 'auto',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-start',
	boxShadow: theme.shadows[0],
	border: `1px solid ${theme.palette.grey[300]}`,
	borderRadius: theme.spacing(1),
	gap: theme.spacing(2),
	'&:hover': {
		boxShadow: theme.shadows[1]
	},
	'& > svg': {
		margin: '0 16px 0 auto'
	}
}));
const HeaderAvatar = styled(Avatar, { name: 'header-avatar' })(({ theme }) => ({
	width: theme.spacing(4),
	height: theme.spacing(4),
	margin: theme.spacing(0, 0, 0, 1)
}));
const PoperInner = styled(Paper, { name: 'popper-inner' })(({ theme }) => ({
	width: '175px',

	padding: theme.spacing(1)
}));
const Profile_URL = 'https://jonas-natour.herokuapp.com/img/users';
const UserDropDown = ({ user }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const handleLogOut = () => {
		dispatch(logOut());
		history.push('/');
	};
	const { photo, name } = user;
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'userbox-popper' : undefined;
	return (
		<React.Fragment>
			<UserBox onClick={handleClick} aria-describedby={id}>
				<HeaderAvatar src={`${Profile_URL}/${photo}`} alt='user-photo' />
				<Typography variant='body2'>{name}</Typography>
				<KeyboardArrowDownIcon />
			</UserBox>
			<Popper id={id} open={open} anchorEl={anchorEl} placement='bottom' disablePortal>
				<PoperInner>
					<Typography variant='body2' sx={{ color: 'grey.700', margin: '8px 16px 0 16px' }}>
						My Stuff
					</Typography>
					<List>
						<ListItem disablePadding>
							<ListItemButton
								onClick={() => {
									history.push('/edit');
								}}>
								<ListItemIcon sx={{ minWidth: '40px' }}>
									<PersonIcon />
								</ListItemIcon>
								<ListItemText primary='Proflie' />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton
								onClick={() => {
									history.push('/edit');
								}}>
								<ListItemIcon sx={{ minWidth: '40px' }}>
									<SettingsIcon />
								</ListItemIcon>
								<ListItemText primary='Settings' />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon sx={{ minWidth: '40px' }}>
									<BookmarkBorderOutlinedIcon />
								</ListItemIcon>
								<ListItemText primary='My orders' />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton onClick={handleLogOut}>
								<ListItemIcon sx={{ minWidth: '40px' }}>
									<PowerSettingsNewIcon />
								</ListItemIcon>
								<ListItemText primary='log out' />
							</ListItemButton>
						</ListItem>
					</List>
				</PoperInner>
			</Popper>
		</React.Fragment>
	);
};

export default UserDropDown;
