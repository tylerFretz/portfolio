import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import TitleBar from './components/TitleBar';
import TabContainer from './components/TabContainer';
import Explorer from './components/Explorer';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import GitHub from './pages/GitHub';
import Contact from './pages/Contact';
import Settings from './pages/Settings';

import { useThemeState } from './contexts/ThemeContext';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		background: theme.palette.primary.main,
		height: '94.5vh',
		[theme.breakpoints.down('sm')]: {
			height: '93vh',
			borderRight: '1px solid #112121'
		}
	},
	main: {
		width: '100%',
		overflowY: 'scroll',
	}
}));

function App() {
	const classes = useStyles();
	const { theme } = useThemeState();

	return (
		<ThemeProvider theme={theme}>
			<TitleBar />
			<div className={classes.root}>
				<TabContainer isSideBar={true} />
				<Explorer />
				<div className={classes.main} style={{ background: theme.palette.secondary.main }}>
					<Hidden smDown>
						<TabContainer isSideBar={false} />
					</Hidden>
					<Switch>
						<Route exact path='/projects' component={Projects} />
						<Route exact path='/github' component={GitHub} />
						<Route exact path='/contact' component={Contact} />
						<Route exact path='/about' component={About} />
						<Route exact path='/settings' component={Settings} />
						<Route path='/' component={Home} />
					</Switch>
				</div>
			</div>
			<Footer />
		</ThemeProvider>
	);
};

export default App;
