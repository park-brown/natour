import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Button, Skeleton } from '@mui/material';
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
export const CardSkeletonContainer = styled(Skeleton, { name: 'tour-card-skeleton' })(({ theme }) => ({
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
const CardInnerPic = styled('figure', { name: 'tour-card-header-pic' })(({ theme, src }) => ({
	margin: 0,
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	backgroundImage: `url(https://www.natours.dev/img/tours/${src})`,
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
	padding: '0.75rem 1.5rem',
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
	gap: '8px',
	whiteSpace: 'nowrap'
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
const TourCard = (props) => {
	const { value } = props;
	const {
		name,
		summary,
		ratingsAverage,
		ratingsQuantity,
		price,
		maxGroupSize,
		locations,
		imageCover,
		difficulty,
		duration,
		startLocation: { description },
		startDates
	} = value;
	return (
		<CardContainer>
			<CardTitle>{name}</CardTitle>
			<CardHeader>
				<CardPicture>
					<CardInnerPicOverlay />
					<CardInnerPic src={imageCover} />
				</CardPicture>
			</CardHeader>
			<CardDetails>
				<CardSubHeading>
					{difficulty} {duration}-day tour
				</CardSubHeading>
				<CardText>{summary}</CardText>
				<CardData>
					<RoomOutlinedIcon sx={{ fill: '#55c57a' }} />
					<Typography variant='subtitle2' component='span'>
						{description}
					</Typography>
				</CardData>
				<CardData>
					<CalendarTodayOutlinedIcon sx={{ fill: '#55c57a' }} />
					<Typography variant='subtitle2' component='span'>
						{new Date(startDates[0]).getFullYear()}.{new Date(startDates[0]).getMonth()}.
						{new Date(startDates[0]).getDate()}
					</Typography>
				</CardData>
				<CardData>
					<FlagOutlinedIcon sx={{ fill: '#55c57a' }} />
					<Typography variant='subtitle2' component='span'>
						{locations.length} stops
					</Typography>
				</CardData>
				<CardData>
					<PersonOutlineOutlinedIcon sx={{ fill: '#55c57a' }} />
					<Typography variant='subtitle2' component='span'>
						{maxGroupSize} people
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
					<CardSubHeading sx={{ gridColumn: '1/2', textAlign: 'right' }}>${price}</CardSubHeading>
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
					<CardSubHeading sx={{ gridColumn: '1/2', textAlign: 'right' }}>{ratingsAverage}</CardSubHeading>
					<CardText sx={{ margin: 0, fontStyle: 'normal', gridColumn: '2/3' }}>rating({ratingsQuantity})</CardText>
				</Box>
				<Box sx={{ gridRow: '1/3', justifySelf: 'end', alignSelf: 'center' }}>
					<DetailButton component={Link} to={`/${name}`}>
						Details
					</DetailButton>
				</Box>
			</CardFooter>
		</CardContainer>
	);
};

export default TourCard;
