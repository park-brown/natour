import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Avatar, AvatarGroup, Button } from '@mui/material';
import { Logo } from '../../components/AppHeader/AppHeader';
const SectionContainer = styled(Box, { name: 'call-to-action-section' })(({ theme }) => ({
	width: '100%',
	position: 'relative',
	overflow: 'hidden'
}));
const LayOutContainer = styled(Box, { name: 'lay-out-container' })(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		position: 'relative',
		width: '100%',
		maxWidth: '375px',
		padding: 'calc(100vw * 0.1051 + 1rem) 1rem',
		margin: '0 auto'
	},
	[theme.breakpoints.up('sm')]: {
		padding: 'calc(100vw * 0.1051 + 1.5rem) 1.5rem',
		maxWidth: '768px'
	},
	[theme.breakpoints.up('md')]: {
		padding: 'calc(100vw * 0.1051 + 2rem) 2rem',
		maxWidth: '980px'
	}
}));
const LayOut = styled(Box, { name: 'section-layout' })(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
}));
const CtaCard = styled(Box, { name: 'cta-card' })(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		width: '100%',
		maxWidth: '400px',
		padding: theme.spacing(5, 2),
		border: `1px solid ${theme.palette.grey[400]}`,
		borderRadius: '8px',
		boxShadow: theme.shadows[2],
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
		gap: '2rem'
	},
	[theme.breakpoints.up('sm')]: {
		flexDirection: 'row',
		maxWidth: '768px'
	}
}));
const GradientText = styled(Typography, { name: 'gradient-text' })(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		display: 'block',
		backgroundImage: 'linear-gradient(to right, #7dd56f, #28b487)',
		backgroundClip: 'text',
		color: 'transparent',
		cursor: 'pointer',
		textTransform: 'uppercase'
	}
}));
const BookButton = styled(Button, { name: 'detail-page-book-button' })(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		...theme.typography.subtitle1,
		padding: '0.75rem 3rem',
		backgroundColor: '#55c57a',
		whiteSpace: 'nowrap',
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
const CallToAction = ({ duration }) => {
	return (
		<SectionContainer component='section'>
			<LayOutContainer>
				<LayOut>
					<CtaCard>
						<AvatarGroup max={3} spacing='medium'>
							<Avatar alt='logo' sx={{ backgroundColor: 'transparent' }}>
								<Logo sx={{ width: '39px', height: '20px', margin: 0 }} />
							</Avatar>
							<Avatar alt='tour-image-1' src='/tour-2-2.jpg' />
							<Avatar alt='tour-image-2' src='/tour-2-3.jpg' />
						</AvatarGroup>
						<Box
							sx={{
								width: '100%',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'flex-start',
								gap: '1rem'
							}}>
							<GradientText variant='body1' component='h6'>
								what are you waiting for ?
							</GradientText>
							<Typography variant='body1' color='grey.500'>
								{duration} days. 1 adventure. <br />
								Infinite memories.
								<br /> Make it yours today!
							</Typography>
						</Box>
						<BookButton>Book Tour</BookButton>
					</CtaCard>
				</LayOut>
			</LayOutContainer>
		</SectionContainer>
	);
};

export default CallToAction;
