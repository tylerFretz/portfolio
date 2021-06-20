import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TitleBar from './components/TitleBar';
import TabContainer from './components/TabContainer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import GitHub from './pages/GitHub';
import Contact from './pages/Contact';
import Settings from './pages/Settings';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		background: theme.palette.primary.main,
		minHeight: '100vh'
	}
}));

function App() {
	const classes = useStyles();

	return (
		<>
			<TitleBar />
			<div className={classes.root}>
				<TabContainer isSideBar={false} />
				<div style={{ width: '100%' }}>
					<TabContainer isSideBar={true} />
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
		</>
	);
};

export default App;
