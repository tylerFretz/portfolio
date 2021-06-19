import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Tab from './Tab';
import reactIcon from '../assets/reactIcon.svg';
import htmlIcon from '../assets/htmlIcon.jpg';
import cssIcon from '../assets/cssIcon.svg';
import tsIcon from '../assets/tsIcon.png';
import markDownIcon from '../assets/markDownIcon.svg';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center'
	}
}));

const TabContainer = () => {
	const classes = useStyles();
	const history = useHistory();
	const [currentTab, setCurrentTab] = useState('home');
	const tabs = [
		{ title: 'home.tsx', value: 'home', logoSrc: reactIcon },
		{ title: 'about.html', value: 'about', logoSrc: htmlIcon },
		{ title: 'contact.css', value: 'contact', logoSrc: cssIcon },
		{ title: 'projects.css', value: 'projects', logoSrc: tsIcon },
		{ title: 'github.md', value: 'github', logoSrc: markDownIcon }
	];

	const handleClick = (value: string) => {
		setCurrentTab(value);
		history.push(`/${currentTab}`);
	};


	return (
		<div className={classes.root}>
			{tabs.map((tab) => (
				<Tab
					key={tab.value}
					open={currentTab === tab.value}
					title={tab.title}
					value={tab.value}
					logoSrc={tab.logoSrc}
					handleClick={handleClick}
				/>
			))}
		</div>
	);
};

export default TabContainer;


