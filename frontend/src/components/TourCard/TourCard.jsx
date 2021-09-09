import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link } from 'react-router-dom';
const CardContainer = styled(Box, { name: 'tour-card' })(({ theme }) => ({
	width: '100%',
	maxWidth: '320px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-start',
	alignItems: 'center',
	boxShadow: theme.shadows[4],
	borderRadius: '0.5rem',
	position: 'relative',
	zIndex: 0,
	overflow: 'hidden'
}));
const CardHeader = styled(Box, { name: 'tour-card-header' })(({ theme }) => ({
	position: 'relative',
	width: '100%',
	height: '13.75rem',
	backgroundColor: theme.palette.common.white
}));
const CardPicture = styled(Box, { name: 'tour-card-header-pic-container' })(({ theme }) => ({
	position: 'relative',
	clipPath: 'polygon(0 0, 100% 0%, 100% 83%, 0% 100%)',
	height: '100%',

	zIndex: 1
}));
const CardInnerPic = styled('figure', { name: 'tour-card-header-pic' })(({ theme }) => ({
	margin: 0,
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	backgroundImage: 'url(./tour-2-cover.jpg)',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover'
}));
const CardInnerPicOverlay = styled(Box, { name: 'tour-card-header-pic-overlay' })(({ theme }) => ({
	content: '""',
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	background:
		'linear-gradient(120deg, rgba(0,0,0,0.6) 4.58%, rgba(0,0,0,0) 69.61%),linear-gradient(24.5deg, rgba(0,0,0,0.2) 4.71%, rgba(0,0,0,0) 71.49%)'
}));
const CardTitle = styled(Box, { name: 'tour-card-title' })(({ theme }) => ({
	...theme.typography.h6,
	width: '100%',
	height: '2rem',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	textTransform: 'uppercase',
	backgroundImage: 'linear-gradient(to right, #7dd56f, #28b487)',
	color: theme.palette.common.white,
	whiteSpace: 'nowrap'
}));
const CardDetails = styled(Box, { name: 'tour-card-details' })(({ theme }) => ({
	width: '100%',
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	gap: '1.75rem 2rem',
	padding: '1.75rem 2rem',
	backgroundColor: theme.palette.common.white
}));
const CardSubHeading = styled(Box, { name: 'tour-card-subheading' })(({ theme }) => ({
	...theme.typography.body,
	fontWeight: 700,
	textTransform: 'uppercase',
	textAlign: 'center',
	gridColumn: '1 / -1'
}));
const CardText = styled(Box, { name: 'tour-card-text' })(({ theme }) => ({
	...theme.typography.subtitle1,
	fontStyle: 'italic',
	gridColumn: '1 / -1'
}));
const CardData = styled(Box, { name: 'tour-card-data' })(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: '8px'
}));
const CardFooter = styled(Box, { name: 'tour-card-footer' })(({ theme }) => ({
	width: '100%',
	backgroundColor: '#f1f1f1',
	padding: '1rem 2rem',
	borderTop: '1px solid #f1f1f1',
	display: 'grid',
	gridTemplateColumns: 'auto 1fr',
	gap: '0 1rem'
}));
export const DetailButton = styled(Button, { name: 'tour-card-detail-button' })(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		...theme.typography.subtitle1,
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
const TourCard = () => {
	return (
		<CardContainer>
			<CardTitle>the sea explorer</CardTitle>
			<CardHeader>
				<CardPicture>
					<CardInnerPicOverlay />
					<CardInnerPic />
				</CardPicture>
			</CardHeader>
			<CardDetails>
				<CardSubHeading>medium 7-day tour</CardSubHeading>
				<CardText>Exploring the jaw-dropping US east coast by foot and by boat</CardText>
				<CardData>
					<RoomOutlinedIcon sx={{ fill: '#55c57a' }} />
					<Typography variant='subtitle2' component='span'>
						Miami, USA
					</Typography>
				</CardData>
				<CardData>
					<CalendarTodayOutlinedIcon sx={{ fill: '#55c57a' }} />
					<Typography variant='subtitle2' component='span'>
						June 2021
					</Typography>
				</CardData>
				<CardData>
					<FlagOutlinedIcon sx={{ fill: '#55c57a' }} />
					<Typography variant='subtitle2' component='span'>
						4 stops
					</Typography>
				</CardData>
				<CardData>
					<PersonOutlineOutlinedIcon sx={{ fill: '#55c57a' }} />
					<Typography variant='subtitle2' component='span'>
						15 people
					</Typography>
				</CardData>
			</CardDetails>
			<CardFooter>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: '2.5rem 1fr',
						gridTemplateRows: '2rem',
						alignItems: 'center',
						gap: '0 8px',
						gridRow: '1/2'
					}}>
					<CardSubHeading sx={{ gridColumn: '1/2', textAlign: 'right' }}>$497</CardSubHeading>
					<CardText sx={{ margin: 0, fontStyle: 'normal', gridColumn: '2/3' }}>per person</CardText>
				</Box>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: '2.5rem 1fr',
						gridTemplateRows: '2rem',
						alignItems: 'center',
						gap: '0 8px',
						gridRow: ' 2 / 3'
					}}>
					<CardSubHeading sx={{ gridColumn: '1/2', textAlign: 'right' }}>4.8 </CardSubHeading>
					<CardText sx={{ margin: 0, fontStyle: 'normal', gridColumn: '2/3' }}>rating(6)</CardText>
				</Box>
				<Box sx={{ gridRow: '1/3', justifySelf: 'end', alignSelf: 'center' }}>
					<DetailButton component={Link} to='/the-sea-explorer'>
						Details
					</DetailButton>
				</Box>
			</CardFooter>
		</CardContainer>
	);
};

export default TourCard;
