import * as React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Box, Toolbar, Typography, CssBaseline, useScrollTrigger, Button } from '@mui/material';
import { Link } from 'react-router-dom';
function ElevationScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0
	});
}
const GradientText = styled(Typography, { name: 'appbar-brand-name' })(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		display: 'none'
	},
	[theme.breakpoints.up('sm')]: {
		display: 'block',
		backgroundImage: 'linear-gradient(to right, #7dd56f, #28b487)',
		backgroundClip: 'text',
		color: 'transparent',
		cursor: 'pointer'
	}
}));
const Logo = styled(Box, { name: 'natour-logo' })(({ theme }) => ({
	cursor: 'pointer',
	margin: '0 8px 0 0 ',
	width: '46.8px',
	height: '24px',
	backgroundImage: 'url(./logo-white.png)',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	filter: 'invert(59%) sepia(96%) saturate(296%) hue-rotate(87deg) brightness(97%) contrast(89%)'
}));
const ButtonContainer = styled(Box, { name: 'button-container' })(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: '8px',
	marginLeft: 'auto'
}));
const HeaderButton = styled(Button, { name: 'headr-button' })(({ theme }) => ({
	backgroundImage: 'linear-gradient(to right, #7dd56f, #28b487)',
	backgroundClip: 'text',
	whiteSpace: 'nowrap',
	color: 'transparent',
	border: '1px solid #28b487',
	transition: `${theme.transitions.create(['transform', 'boxShadow'], {
		duration: theme.transitions.duration.standard
	})}`,
	'&:hover': {
		border: '1px solid #28b487',
		transform: 'scale(0.98)',
		boxShadow: theme.shadows[2]
	}
}));
const AppHeader = (props) => {
	return (
		<React.Fragment>
			<CssBaseline />
			<ElevationScroll {...props}>
				<AppBar color='inherit'>
					<Toolbar>
						<Logo component={Link} to='/' />
						<GradientText variant='h6' component={Link} to='/'>
							Natours
						</GradientText>
						<ButtonContainer>
							<HeaderButton component={Link} variant='outlined' to='/login'>
								log in
							</HeaderButton>
							<HeaderButton component={Link} variant='outlined' to='/signup'>
								sign up
							</HeaderButton>
						</ButtonContainer>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<Toolbar />
		</React.Fragment>
	);
};

export default AppHeader;
