import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tab from './Tab';
import SideBarTab from './SideBarTab';
import reactIcon from '../assets/reactIcon.svg';
import htmlIcon from '../assets/htmlIcon.jpg';
import cssIcon from '../assets/cssIcon.svg';
import tsIcon from '../assets/tsIcon.png';
import markDownIcon from '../assets/markDownIcon.svg';
import explorerIcon from '../assets/explorerIcon.svg';
import gitHubLogo from '../assets/gitHubLogo.svg';
import codeIcon from '../assets/codeIcon.svg';
import mailIcon from '../assets/mailIcon.svg';
import accountsIcon from '../assets/accountsIcon.svg';
import manageIcon from '../assets/manageIcon.svg';

const useStyles = makeStyles((theme) => ({
	tabsBar: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		background: theme.palette.primary.main
	},
	sideBar: {
		height: '90vh',
		width: '4vw',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		background: theme.palette.secondary.main
	}
}));

interface Props {
	isSideBar: boolean
}

const TabContainer: React.FC<Props> = ({ isSideBar }) => {
	const classes = useStyles();

	const tabsBarTabs = [
		{ title: 'home.tsx', value: 'home', logoSrc: reactIcon },
		{ title: 'about.html', value: 'about', logoSrc: htmlIcon },
		{ title: 'contact.css', value: 'contact', logoSrc: cssIcon },
		{ title: 'projects.css', value: 'projects', logoSrc: tsIcon },
		{ title: 'github.md', value: 'github', logoSrc: markDownIcon }
	];

	const sideBarTopTabs = [
		{ value: 'home', logoSrc: explorerIcon },
		{ value: 'github', logoSrc: gitHubLogo },
		{ value: 'projects', logoSrc: codeIcon },
		{ value: 'contact', logoSrc: mailIcon },
	];

	const sideBarBottomTabs = [
		{ value: 'about', logoSrc: accountsIcon },
		{ value: 'settings', logoSrc: manageIcon }
	];

	return isSideBar
		? (
			<div className={classes.tabsBar}>
				{tabsBarTabs.map((tab) => (
					<Tab
						key={tab.value}
						title={tab.title}
						value={tab.value}
						logoSrc={tab.logoSrc}
					/>
				))}
			</div>
		) :
		(
			<div className={classes.sideBar}>
				<div style={{ width: '4vw' }}>
					{sideBarTopTabs.map((tab) => (
						<SideBarTab
							key={tab.value}
							value={tab.value}
							logoSrc={tab.logoSrc}
						/>
					))}
				</div>
				<div style={{ width: '4vw' }}>
					{sideBarBottomTabs.map((tab) => (
						<SideBarTab
							key={tab.value}
							value={tab.value}
							logoSrc={tab.logoSrc}
						/>
					))}
				</div>
			</div>
		);
};

export default TabContainer;


