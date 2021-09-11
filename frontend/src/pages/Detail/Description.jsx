import React from 'react';
import { styled } from '@mui/material/styles';
import { Avatar, Box, Typography } from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
const Container = styled(Box, { name: 'description-section-container' })(({ theme }) => ({
	width: '100%',
	overflow: 'hidden',
	marginTop: 'calc(100vw * -0.105104 + 2rem)',
	position: 'relative'
}));

const DescriptionBackground = styled(Box, { name: 'section-background' })(({ theme }) => ({
	position: 'absolute',
	backgroundColor: theme.palette.grey[100],
	top: 0,
	bottom: 'calc(100vw * 0.1051)',
	left: 0,
	right: 0,
	transform: 'skewY(-6deg)',
	transformOrigin: 'top right'
}));
const SectionLayOutContainer = styled(Box, { name: 'description-section-layOut-container' })(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		position: 'relative',
		width: '100%',
		maxWidth: '375px',
		padding: 'calc(100vw * 0.1051 + 4rem) 1rem',
		margin: '0 auto'
	},
	[theme.breakpoints.up('sm')]: {
		padding: 'calc(100vw * 0.1051 + 3rem) 1.5rem',
		maxWidth: '768px'
	},
	[theme.breakpoints.up('md')]: {
		padding: 'calc(100vw * 0.1051 + 4rem) 2rem',
		maxWidth: '980px'
	}
}));
const LayOut = styled(Box, { name: 'section-layout' })(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	[theme.breakpoints.up('sm')]: {
		flexDirection: 'row'
	},
	[theme.breakpoints.up('md')]: {}
}));
const OverViewBox = styled(Box, { name: 'overview-box' })(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		width: '100%',
		flexBasis: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start'
	},
	[theme.breakpoints.up('sm')]: {
		width: '50%',
		flexBasis: '50%'
	}
}));
const DescriptionBox = styled(Box, { name: 'Description-box' })(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		width: '100%',
		flexBasis: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		alignSelf: 'stretch'
	},
	[theme.breakpoints.up('sm')]: {
		width: '50%',
		flexBasis: '50%'
	}
}));
const CopyTitle = styled(Typography, { name: 'header-title' })(({ theme }) => ({
	textTransform: 'capitalize',
	backgroundImage: 'linear-gradient(to right, #7dd56f, #28b487)',
	backgroundClip: 'text',
	color: 'transparent',
	cursor: 'pointer'
}));
const OverviewBoxListItem = styled(Box, { name: 'overview-box-list-item' })(({ theme }) => ({
	width: '100%',
	display: 'grid',
	gridTemplateColumns: '35px 105px 80px',
	gridTemplateRows: 'auto',
	gap: '2rem',
	margin: '0 0 1rem 0',
	cursor: 'pointer'
}));
const TourGuideBox = styled(Box, { name: 'tour-guide-box' })(({ theme }) => ({
	width: '100%',
	display: 'grid',
	gridTemplateColumns: '35px 105px 100px',
	gridTemplateRows: 'auto',
	gap: '2rem',
	margin: '0 0 1rem 0',
	alignItems: 'center',
	cursor: 'pointer'
}));
export const TopRightRibbon = styled(Box, { name: 'why-stripe-section-top-right-ribbon' })(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		position: 'absolute',
		zIndex: 2,
		top: 0,
		right: 0,
		left: 0,
		height: '72px',
		overflow: 'hidden',
		transform: 'skewY(-6deg) ',
		transformOrigin: 'top right'
	}
}));
export const TopRightRibbonCyan = styled(Box, { name: 'why-stripe-section-top-right-ribbon-top' })(({ theme }) => ({
	width: '315px',
	height: '40px',
	backgroundColor: '#80e9ff',
	position: 'absolute',
	top: 0,
	right: 0
}));
export const BottomLeftRibbon = styled(Box, { name: 'why-stripe-section-bottom-left-ribbon' })(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		position: 'absolute',
		zIndex: 2,
		bottom: 0,
		left: 0,
		right: 0,
		height: '72px',
		overflow: 'hidden',
		transform: 'skewY(-6deg) ',
		transformOrigin: 'bottom left'
	}
}));
export const BottomleftRibbonBlue = styled(Box, { name: 'why-stripe-section-bottom-left-ribbon-blue' })(
	({ theme }) => ({
		width: '315px',
		height: '40px',
		backgroundColor: '#7a73ff',
		position: 'absolute',
		bottom: 0,
		left: 0
	})
);
export const BottomLeftRibbonCyan = styled(Box, { name: 'why-stripe-section-bottom-left-ribbon-cyan' })(
	({ theme }) => ({
		width: '160px',
		height: '40px',
		backgroundColor: '#80e9ff',
		position: 'absolute',
		bottom: 0,
		left: 0,
		transform: 'translateY(-24px) translateX(157.5px) translate(-50%,0)'
	})
);
export const BottomleftRibbonOverlay = styled(Box, { name: 'why-stripe-section-bottom-left-ribbon-overlay' })(
	({ theme }) => ({
		width: '160px',
		height: '16px',
		backgroundColor: '#0048e5',
		position: 'absolute',
		bottom: 0,
		left: 0,
		transform: 'translateY(-24px) translateX(157.5px) translate(-50%,0)'
	})
);
export const TopRightRibbonBlue = styled(Box, { name: 'why-stripe-section-top-right-ribbon-Bottom' })(({ theme }) => ({
	width: '160px',
	height: '40px',
	backgroundColor: '#7a73ff',
	position: 'absolute',
	top: 0,
	right: 0,
	transform: 'translateY(24px) translateX(-157.5px) translate(50%,0)'
}));
export const TopRightRibbonOverlay = styled(Box, { name: 'why-stripe-section-top-right-ribbon-overlay' })(
	({ theme }) => ({
		width: '160px',
		height: '16px',
		backgroundColor: '#0048e5',
		position: 'absolute',
		top: 0,
		right: 0,
		transform: 'translateY(24px) translateX(-157.5px) translate(50%,0)'
	})
);
const Description = () => {
	return (
		<Container component='section'>
			<TopRightRibbon>
				<TopRightRibbonCyan />
				<TopRightRibbonBlue />
				<TopRightRibbonOverlay />
			</TopRightRibbon>
			<BottomLeftRibbon>
				<BottomleftRibbonBlue />
				<BottomLeftRibbonCyan />
				<BottomleftRibbonOverlay />
			</BottomLeftRibbon>
			<DescriptionBackground />
			<SectionLayOutContainer>
				<LayOut>
					<OverViewBox>
						<CopyTitle variant='h6' sx={{ mb: '1rem' }}>
							quick facts
						</CopyTitle>
						<OverviewBoxListItem>
							<CalendarTodayOutlinedIcon sx={{ fill: '#55c57a', width: '20px', height: '20px' }} />
							<Typography variant='body2'>next date</Typography>
							<Typography variant='body2' color='grey.600'>
								June 2021
							</Typography>
						</OverviewBoxListItem>
						<OverviewBoxListItem>
							<MovingOutlinedIcon sx={{ fill: '#55c57a', width: '20px', height: '20px' }} />
							<Typography variant='body2'>Difficulty</Typography>
							<Typography variant='body2' color='grey.600'>
								Medium
							</Typography>
						</OverviewBoxListItem>
						<OverviewBoxListItem>
							<GroupOutlinedIcon sx={{ fill: '#55c57a', width: '20px', height: '20px' }} />

							<Typography variant='body2'>participants</Typography>
							<Typography variant='body2' color='grey.600'>
								15 people
							</Typography>
						</OverviewBoxListItem>
						<OverviewBoxListItem>
							<GradeOutlinedIcon sx={{ fill: '#55c57a', width: '20px', height: '20px' }} />

							<Typography variant='body2'>Rating</Typography>
							<Typography variant='body2' color='grey.600'>
								4.8/5
							</Typography>
						</OverviewBoxListItem>
						<CopyTitle variant='h6' sx={{ mb: '1rem' }}>
							Your tour guides
						</CopyTitle>
						<TourGuideBox>
							<Avatar src='./user-6.jpg' alt='' sx={{ width: '35px', height: '35px' }} />

							<Typography variant='body2'>Lead guide</Typography>
							<Typography variant='body2' color='grey.600'>
								Miyah Myles
							</Typography>
						</TourGuideBox>
						<TourGuideBox>
							<Avatar src='./user-12.jpg' alt='' sx={{ width: '35px', height: '35px' }} />
							<Typography variant='body2'>Tour guide</Typography>
							<Typography variant='body2' color='grey.600'>
								Jennifer Hardy
							</Typography>
						</TourGuideBox>
					</OverViewBox>
					<DescriptionBox>
						<CopyTitle variant='h6' sx={{ mb: '1rem', alignSelf: 'flex-start' }}>
							about the sea explore tour
						</CopyTitle>
						<Typography variant='body2' color='grey.600' sx={{ mb: '1rem' }}>
							Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur
							sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</Typography>
						<Typography variant='body2' color='grey.600'>
							Irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
							sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
							ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
							pariatur.
						</Typography>
					</DescriptionBox>
				</LayOut>
			</SectionLayOutContainer>
		</Container>
	);
};

export default Description;
