import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, MobileStepper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
	{
		label: 'tour-cover',
		imgPath: './tour-2-cover.jpg'
	},
	{
		label: 'beach view',
		imgPath: './tour-2-1.jpg'
	},
	{
		label: 'turtle',
		imgPath: './tour-2-2.jpg'
	},
	{
		label: 'palm tree',
		imgPath: './tour-2-3.jpg'
	}
];

const HeaderImage = styled(Box, { name: 'header-image' })(({ theme }) => ({
	[theme.breakpoints.up('xs')]: {
		height: 250,
		display: 'block',
		maxWidth: 375,
		overflow: 'hidden',
		width: '100%',
		margin: '0 auto',
		cursor: 'pointer'
	},
	[theme.breakpoints.up('sm')]: {
		height: 512,
		display: 'block',
		maxWidth: 768,
		overflow: 'hidden',
		width: '100%',
		margin: '0 auto'
	},
	[theme.breakpoints.up('md')]: {
		height: 653,
		display: 'block',
		maxWidth: 980,
		overflow: 'hidden',
		width: '100%',
		margin: '0 auto'
	}
}));
const Carousel = () => {
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = images.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step) => {
		setActiveStep(step);
	};
	return (
		<React.Fragment>
			<AutoPlaySwipeableViews
				style={{ position: 'relative', zIndex: 2 }}
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={activeStep}
				onChangeIndex={handleStepChange}
				enableMouseEvents>
				{images.map((step, index) => (
					<div key={step.label}>
						<HeaderImage component='img' src={step.imgPath} alt={step.label} />
					</div>
				))}
			</AutoPlaySwipeableViews>
			<MobileStepper
				steps={maxSteps}
				activeStep={activeStep}
				position='static'
				sx={{
					justifyContent: 'center',
					paddingBottom: 'calc(100vw * 0.105104)'
				}}
				nextButton={
					<Button size='small' onClick={handleNext} disabled={activeStep === maxSteps - 1} sx={{ display: 'none' }}>
						Next
						{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
					</Button>
				}
				backButton={
					<Button size='small' onClick={handleBack} disabled={activeStep === 0} sx={{ display: 'none' }}>
						{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
						Back
					</Button>
				}
			/>
		</React.Fragment>
	);
};

export default Carousel;
