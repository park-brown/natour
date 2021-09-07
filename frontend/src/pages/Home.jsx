import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import TourCard from '../components/TourCard/TourCard';
const Container = styled(Box, { name: 'home-section-container' })(({ theme }) => ({
	backgroundColor: '#f7f7f7',
	width: '100%'
}));
const LayOutContainer = styled(Box, { name: 'home-section-layOut-container' })(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		// 1 column
		width: '100%',
		height: '100%',
		padding: '2rem 1rem ',
		display: 'flex',
		justifyContent: 'center'
	},
	[theme.breakpoints.up('sm')]: {
		//774  2 column
		maxWidth: '764px',
		padding: '1.5rem 0',
		margin: '0 auto'
	},
	[theme.breakpoints.up('md')]: {
		//980  2 column
		maxWidth: '960px',
		padding: '1.5rem 0'
	},
	[theme.breakpoints.up('lg')]: {
		//1280  3 column
		maxWidth: '1080px',
		padding: '2rem 0'
	}
}));
const LayOut = styled(Box, { name: 'home-section-layOut' })(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		display: 'grid',
		gridTemplateColumns: 'minmax(min-content,320px)',
		gap: '3rem 0'
	},
	[theme.breakpoints.up('sm')]: {
		display: 'grid',
		gridTemplateColumns: 'repeat(2,320px)',
		gap: '2.5rem 2.5rem'
	},
	[theme.breakpoints.up('md')]: {
		display: 'grid',
		gridTemplateColumns: 'repeat(2,320px)',
		gap: '3.75rem 3.75rem'
	},
	[theme.breakpoints.up('lg')]: {
		display: 'grid',
		gridTemplateColumns: 'repeat(3,320px)',
		gap: '3.75rem 3.75rem'
	}
}));
const Home = () => {
	return (
		<Container component='section'>
			<LayOutContainer>
				<LayOut>
					<TourCard />
					{/* <TourCard />
					<TourCard />
					<TourCard /> */}
				</LayOut>
			</LayOutContainer>
		</Container>
	);
};

export default Home;
