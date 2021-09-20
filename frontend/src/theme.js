import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 776,
			md: 980,
			lg: 1280,
			xl: 1640
		}
	}
});
theme = responsiveFontSizes(theme);

export default theme;
