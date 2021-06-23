import React, { useState, useEffect } from 'react';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { Theme, PaletteType } from '@material-ui/core';
import darkImg from '../assets/darkImg.png';
import lightImg from '../assets/lightImg.png';
import abyssImg from '../assets/abyssImg.png';
import draculaImg from '../assets/draculaImg.png';
import monokaiImg from '../assets/monokaiImg.png';


// dark
// light
// dracula
// monokai
// abyss

interface BaseTheme {
	palette: {
		primary: {
			main: PaletteType,
			contrastText: PaletteType
		},
		secondary: {
			main: PaletteType,
			contrastText: PaletteType
		}
	}
}

type State = {
	theme: Theme
};

type Actions = {
	changeTheme: (theme: BaseTheme) => void;
};

const dark: BaseTheme = {
	palette: {
		primary: {
			main: '#1F2428' as PaletteType,
			contrastText: '#ECECEC' as PaletteType
		},
		secondary: {
			main: '#24292E' as PaletteType,
			contrastText: '#DDDEDE' as PaletteType
		}
	}
};

const dracula: BaseTheme = {
	palette: {
		primary: {
			main: '#282a36' as PaletteType,
			contrastText: '#f8f8f2' as PaletteType
		},
		secondary: {
			main: '#21222c' as PaletteType,
			contrastText: '#f8f8f2' as PaletteType
		}
	}
};

const monokai: BaseTheme = {
	palette: {
		primary: {
			main: '#272822' as PaletteType,
			contrastText: '#f8f8f2' as PaletteType
		},
		secondary: {
			main: '#23241F' as PaletteType,
			contrastText: '#f8f8f2' as PaletteType
		}
	}
};

const abyss: BaseTheme = {
	palette: {
		primary: {
			main: '#082050' as PaletteType,
			contrastText: '#FFF' as PaletteType
		},
		secondary: {
			main: '#051336' as PaletteType,
			contrastText: '#f8f8f2' as PaletteType
		}
	}
};

const light: BaseTheme = {
	palette: {
		primary: {
			main: '#FAFAFA' as PaletteType,
			contrastText: '#313131' as PaletteType
		},
		secondary: {
			main: '#C7C7C7' as PaletteType,
			contrastText: '#313131' as PaletteType
		}
	}
};

const themes = [
	{ name: 'Dark', value: dark, image: darkImg },
	{ name: 'light', value: light, image: lightImg },
	{ name: 'Dracula', value: dracula, image: draculaImg },
	{ name: 'monokai', value: monokai, image: monokaiImg },
	{ name: 'Abyss', value: abyss, image: abyssImg }
];

const ThemeStateContext = React.createContext<State>({} as State);
const ThemeActionsContext = React.createContext<Actions>({} as Actions);

const ThemeContextProvider: React.FC = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(responsiveFontSizes(createMuiTheme(dark)));

	useEffect(() => {
		theme.props = {
			MuiButtonBase: {
				disableRipple: true
			},
			MuiButton: {
				disableElevation: true
			}
		};

		theme.overrides = {
			MuiFormLabel: {
				root: {
					color: theme.palette.primary.contrastText
				}
			},
			MuiFormHelperText: {
				root: {
					color: theme.palette.primary.contrastText,
					background: theme.palette.primary.main,
					padding: '.5rem'
				},
			},
			MuiInputBase: {
				root: {
					color: theme.palette.primary.contrastText,
					background: theme.palette.primary.main
				},
			},
			MuiButton: {
				contained: {
					background: theme.palette.primary.contrastText
				}
			}
		};
	}, [theme]);

	const changeTheme = (newTheme: BaseTheme) => {
		setTheme(responsiveFontSizes(createMuiTheme(newTheme)));
	};

	return (
		<ThemeStateContext.Provider value={{ theme }}>
			<ThemeActionsContext.Provider value={{ changeTheme }}>
				{children}
			</ThemeActionsContext.Provider>
		</ThemeStateContext.Provider>
	);
};

const useThemeState = () => React.useContext(ThemeStateContext);
const useThemeActions = () => React.useContext(ThemeActionsContext);

export { themes, useThemeState, useThemeActions, ThemeContextProvider };