import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { PaletteType } from '@material-ui/core';

const theme = responsiveFontSizes(createMuiTheme({
	palette: {
		primary: {
			main: '#1F2428' as PaletteType,
			contrastText: '#EFEFEF' as PaletteType
		},
		secondary: {
			main: '#24292E' as PaletteType,
			contrastText: '#DDDEDE' as PaletteType
		}
	}
}));

theme.props = {
	MuiButtonBase: {
		disableRipple: true
	},
	MuiButton: {
		disableElevation: true
	}
};

export default theme;