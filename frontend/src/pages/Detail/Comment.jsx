import React from 'react';
import { styled } from '@mui/material/styles';
import { useGetAllReviewFromATourQuery } from '../../API/natoursApi';
import { Box, Typography, Tabs, Tab, Avatar, Rating } from '@mui/material';
import {
	TopRightRibbon,
	TopRightRibbonBlue,
	TopRightRibbonCyan,
	TopRightRibbonOverlay,
	BottomLeftRibbon,
	BottomleftRibbonBlue,
	BottomLeftRibbonCyan,
	BottomleftRibbonOverlay
} from './Description';

const CommentSection = styled(Box, { name: 'detail-page-comment-section' })(({ theme }) => ({
	width: '100%',
	position: 'relative',
	overflow: 'hidden',
	zIndex: 0,
	height: '100vh'
}));
const CommentBackground = styled(Box, { name: 'section-background' })(({ theme }) => ({
	position: 'absolute',
	background: theme.palette.grey[100],
	top: 0,
	bottom: 'calc(100vw * 0.1051)',
	left: 0,
	right: 0,
	transform: 'skewY(-6deg)',
	transformOrigin: 'top right',
	zIndex: 1
}));
const LayOutContainer = styled(Box, { name: 'commment-layout-container' })(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		position: 'relative',
		zIndex: 2,
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
const CommentCard = styled(Box, { name: 'comment-card' })(({ theme }) => ({
	width: '100%',
	maxWidth: '300px',
	padding: theme.spacing(2),
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'flex-start',
	gap: theme.spacing(4),
	border: `1px solid ${theme.palette.grey[400]}`,
	borderRadius: '8px',
	boxShadow: theme.shadows[4]
}));
const CommentCardHeader = styled(Box, { name: 'commmend-card-header' })(({ theme }) => ({
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	gap: theme.spacing(2),
	color: theme.palette.common.black
}));
const CommentCardBody = styled(Box, { name: 'comment-card-body' })(({ theme }) => ({
	height: '180px',
	color: theme.palette.grey[700],
	width: '100%',
	textAlign: 'left',
	lineHeight: '20px',
	overflow: 'hidden'
}));
const CustomTab = styled(Tab, { name: 'custom-tab' })(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		margin: theme.spacing(0, 1.5)
	},
	[theme.breakpoints.up('sm')]: {
		margin: theme.spacing(0, 2)
	},
	[theme.breakpoints.up('md')]: {
		margin: theme.spacing(0, 2.5)
	}
}));

const CardInner = (props) => {
	const { rating, review, user } = props;
	return (
		<CommentCard>
			<CommentCardHeader>
				<Avatar src={`https://www.natours.dev/img/users/${user.photo}`} sx={{ width: '45px', height: '45px' }} />
				<Typography variant='body2'>{user.name}</Typography>
			</CommentCardHeader>
			<CommentCardBody variant='body2'>{review}</CommentCardBody>
			<Rating name='read-only' value={rating} readOnly precision={0.5} />
		</CommentCard>
	);
};

const Comment = ({ id }) => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const { data = {}, isLoading } = useGetAllReviewFromATourQuery(id);

	return (
		<React.Fragment>
			{isLoading ? null : (
				<CommentSection component='section'>
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
					<CommentBackground />
					<LayOutContainer>
						<Tabs
							value={value}
							onChange={handleChange}
							variant='scrollable'
							// scrollButtons
							// allowScrollButtonsMobile
							aria-label='review-box'>
							{data.map(({ _id, rating, review, user }) => (
								<CustomTab disableRipple label={<CardInner rating={rating} review={review} user={user} />} key={_id} />
							))}
						</Tabs>
					</LayOutContainer>
				</CommentSection>
			)}
		</React.Fragment>
	);
};

export default Comment;
