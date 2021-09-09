import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import Carousel from './Carousel';
import Description from './Description';

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
	cursor: 'pointer'
}));
const CopySubTitle = styled(Box, { name: 'detail-page-copy-subtitle' })(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		width: '100%',
		maxWidth: '18.75rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	[theme.breakpoints.up('sm')]: {
		width: '58.33333%'
	}
}));

const Detail = () => {
	return (
		<Container component='main'>
			<HeaderCopy>
				<CopyTitle component='h4' variant='h6'>
					the sea explorer
				</CopyTitle>
				<CopySubTitle>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
						<AccessTimeOutlinedIcon sx={{ fill: '#55c57a' }} />
						<CopyTitle variant='body1'>7 days</CopyTitle>
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
						<RoomOutlinedIcon sx={{ fill: '#55c57a' }} />
						<CopyTitle variant='body1'>Miami, USA</CopyTitle>
					</Box>
				</CopySubTitle>
			</HeaderCopy>
			<Header component='section'>
				<Carousel />
			</Header>
			<Description />
		</Container>
	);
};

export default Detail;
