import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tab from './Tab';
import SideBarTab from './SideBarTab';
import reactIcon from '../assets/reactIcon.svg';
import htmlIcon from '../assets/htmlIcon.png';
import cssIcon from '../assets/cssIcon.svg';
import tsIcon from '../assets/tsIcon.png';
import explorerIcon from '../assets/explorerIcon.svg';
import codeIcon from '../assets/codeIcon.svg';
import mailIcon from '../assets/mailIcon.svg';
import accountsIcon from '../assets/accountsIcon.svg';
import manageIcon from '../assets/manageIcon.svg';
import jsonIcon from '../assets/jsonIcon.png';

const useStyles = makeStyles((theme) => ({
	tabsBar: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		background: theme.palette.primary.main
	},
	sideBar: {
		width: '4vw',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		background: theme.palette.secondary.main,
		[theme.breakpoints.down('sm')]: {
			width: '14vw',
			borderRight: '1px solid #112121',
			paddingBottom: '2rem'
		}
	}
}));

const tabsBarTabs = [
	{ title: 'home.tsx', value: 'home', logoSrc: reactIcon },
	{ title: 'about.html', value: 'about', logoSrc: htmlIcon },
	{ title: 'contact.css', value: 'contact', logoSrc: cssIcon },
	{ title: 'projects.ts', value: 'projects', logoSrc: tsIcon },
	{ title: 'settings.json', value: 'settings', logoSrc: jsonIcon }
];

const sideBarTopTabs = [
	{ title: 'home.tsx', value: 'home', logoSrc: explorerIcon },
	{ title: 'projects.ts', value: 'projects', logoSrc: codeIcon },
	{ title: 'contact.css', value: 'contact', logoSrc: mailIcon },
];

const sideBarBottomTabs = [
	{ title: 'about.html', value: 'about', logoSrc: accountsIcon },
	{ title: 'settings.json', value: 'settings', logoSrc: manageIcon }
];

interface Props {
	isSideBar: boolean
}

const TabContainer: React.FC<Props> = ({ isSideBar }) => {
	const classes = useStyles();

	return isSideBar
		? (
			<div className={classes.sideBar}>
				<div>
					{sideBarTopTabs.map((tab) => (
						<SideBarTab
							key={tab.value}
							value={tab.value}
							title={tab.title}
							logoSrc={tab.logoSrc}
						/>
					))}
				</div>
				<div>
					{sideBarBottomTabs.map((tab) => (
						<SideBarTab
							key={tab.value}
							value={tab.value}
							title={tab.title}
							logoSrc={tab.logoSrc}
						/>
					))}
				</div>
			</div>
		) : (
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
		);
};

export default TabContainer;


