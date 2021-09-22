import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container, Tab, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import EditAccount from './EditAccount';
import ChangePassword from './ChangePassword';
const LayOut = styled(Box, { name: 'edit-page-layout' })(({ theme }) => ({
	[theme.breakpoints.up('sm')]: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		backgroundColor: theme.palette.common.white,
		boxShadow: theme.shadows[1],
		borderRadius: '8px',
		'& .MuiTabs-root': {
			flex: '25%',
			alignSelf: 'stretch',
			border: `1px solid ${theme.palette.grey[300]}`,
			// borderLeft: `1px solid ${theme.palette.grey[300]}`,
			// borderBottom: `1px solid ${theme.palette.grey[300]}`,
			borderTopLeftRadius: '8px',
			borderBottomLeftRadius: '8px'
		},
		'& .MuiTabPanel-root': {
			flex: '75%',
			padding: '1.5rem 1.5rem 1.5rem 6rem'
		},
		'& .MuiButtonBase-root': {
			alignItems: 'flex-start'
		}
	}
}));
const Edit = () => {
	const theme = useTheme();
	const match_sm = useMediaQuery(theme.breakpoints.down('sm'));
	const [value, setValue] = React.useState('1');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<Box sx={{ width: '100%', backgroundColor: `${theme.palette.grey[50]}` }}>
			<Container maxWidth='md' sx={{ padding: { xs: '3rem 1rem', sm: '4rem 1rem', md: '5rem 1rem' } }}>
				<LayOut>
					<TabContext value={value}>
						<TabList
							onChange={handleChange}
							aria-label='lab API tabs example'
							orientation={match_sm ? 'horizontal' : 'vertical'}
							variant='scrollable'>
							<Tab label='edit account' value='1' />
							<Tab label='change password' value='2' />
						</TabList>

						<TabPanel value='1'>
							<EditAccount />
						</TabPanel>
						<TabPanel value='2'>
							<ChangePassword />
						</TabPanel>
					</TabContext>
				</LayOut>
			</Container>
		</Box>
	);
};

export default Edit;
