import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Skeleton } from '@mui/material';
const CardSkeletonContainer = styled(Skeleton, { name: 'tour-card-skeleton' })(({ theme }) => ({
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
	overflow: 'hidden',
	transform: 'scale(1)'
}));
const CardTitleSkeleton = styled(Box, { name: 'tour-card-title-skeleton' })(({ theme }) => ({
	...theme.typography.h6,
	width: '100%',
	height: '3.5rem'
}));
const CardHeaderSkeleton = styled(Box, { name: 'tour-card-header-skeleton' })(({ theme }) => ({
	position: 'relative',
	width: '100%',
	height: '13.75rem'
}));
const CardDetailsSkeleton = styled(Box, { name: 'tour-card-details-skeleton' })(({ theme }) => ({
	position: 'relative',
	width: '100%',
	height: '16.75rem'
}));
const CardFooterSkeleton = styled(Box, { name: 'tour-card-footer-skeleton' })(({ theme }) => ({
	position: 'relative',
	width: '100%',
	height: '6.0625rem'
}));
const TourCardSkeleton = () => {
	return (
		<CardSkeletonContainer>
			<CardTitleSkeleton />
			<CardHeaderSkeleton />
			<CardDetailsSkeleton />
			<CardFooterSkeleton />
		</CardSkeletonContainer>
	);
};

export default TourCardSkeleton;
