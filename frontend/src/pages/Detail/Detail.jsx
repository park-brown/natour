import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, LinearProgress } from '@mui/material';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import Carousel from './Carousel';
import Description from './Description';
import MapBox from './MapBox';
import Comment from './Comment';
import CallToAction from './CallToAction';
import { useGetAllToursQuery } from '../../API/natoursApi';
import { useParams } from 'react-router';
const Container = styled(Box, { name: 'detail-page-container' })(({ theme }) => ({
	width: '100%',
	overflow: 'hidden'
}));
const Header = styled(Box, { name: 'detail-page-header' })(({ theme }) => ({
	width: '100%',
	position: 'relative',
	zIndex: 0,
	overflow: 'hidden'
}));

const HeaderCopy = styled(Box, { name: 'detail-page-header-copy-container' })(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		width: '87.5%',
		margin: '0 auto',
		padding: '1rem',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		position: 'relative',
		gap: '1rem'
	},
	[theme.breakpoints.up('sm')]: {
		padding: '2rem',
		width: '100%',
		maxWidth: '450px'
	}
}));
const CopyTitle = styled(Typography, { name: 'header-title' })(({ theme }) => ({
	color: theme.palette.common.black,
	cursor: 'pointer',
	whiteSpace: 'nowrap'
}));
const CopySubTitle = styled(Box, { name: 'detail-page-copy-subtitle' })(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		width: '100%',
		maxWidth: '18.75rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: '12px'
	},
	[theme.breakpoints.up('sm')]: {
		width: '58.33333%'
	}
}));

const Detail = () => {
	const { detail } = useParams();
	useEffect(() => {
		document.title = `natour | ${detail}`;
	});
	const { data } = useGetAllToursQuery(undefined, {
		selectFromResult: ({ data }) => ({ data: data?.find((tour) => tour.name === detail) })
	});
	if (data === undefined) return <LinearProgress />;

	const {
		name,
		duration,
		startLocation,
		imageCover,
		images,
		startDates,
		ratingsAverage,
		difficulty,
		maxGroupSize,
		description,
		guides,
		locations
	} = data;
	return (
		<Container component='main'>
			<HeaderCopy>
				<CopyTitle component='h4' variant='h6'>
					{name}
				</CopyTitle>
				<CopySubTitle>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
						<AccessTimeOutlinedIcon sx={{ fill: '#55c57a' }} />
						<CopyTitle variant='body1'>{duration} days</CopyTitle>
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
						<RoomOutlinedIcon sx={{ fill: '#55c57a' }} />
						<CopyTitle variant='body1'>{startLocation.description}</CopyTitle>
					</Box>
				</CopySubTitle>
			</HeaderCopy>
			<Header component='section'>
				<Carousel images={[imageCover, ...images]} name={name} />
			</Header>
			<Description
				startDates={startDates}
				ratingsAverage={ratingsAverage}
				difficulty={difficulty}
				maxGroupSize={maxGroupSize}
				description={description}
				guides={guides}
				name={name}
			/>
			<MapBox locations={locations} />
			<Comment />
			<CallToAction />
		</Container>
	);
};

export default Detail;
