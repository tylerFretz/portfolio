/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import reactIcon from '../assets/reactIcon.svg';
import htmlIcon from '../assets/htmlIcon.jpg';
import cssIcon from '../assets/cssIcon.svg';
import tsIcon from '../assets/tsIcon.png';
import ExplorerTab from './ExplorerTab';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '18vw',
		background: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
		borderRight: '1px solid #112121'
	},
	title: {
		paddingLeft: '.5rem',
		fontWeight: 400,
		opacity: 0.7,
		textTransform: 'uppercase',
		fontSize: '.7rem',
		letterSpacing: '1px',
		marginBottom: '.75rem',
		userSelect: 'none'

	},
	header: {
		textTransform: 'uppercase',
		fontSize: '.8rem',
		letterSpacing: '1px',
		display: 'flex',
		fontWeight: 500,
		alignItems: 'center',
		cursor: 'pointer',
		userSelect: 'none'
	},
	files: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'center',
		padding: '.5rem 0',
		cursor: 'pointer'
	}
}));


const explorerTabs = [
	{ title: 'home.tsx', value: 'home', logoSrc: reactIcon },
	{ title: 'about.html', value: 'about', logoSrc: htmlIcon },
	{ title: 'contact.css', value: 'contact', logoSrc: cssIcon },
	{ title: 'projects.ts', value: 'projects', logoSrc: tsIcon }
];

const Explorer = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(true);

	const handleOpen = () => {
		setOpen(!open);
	};


	return (
		<Hidden smDown>
			<div className={classes.root}>
				<p className={classes.title}>Explorer</p>
				<div>
					<div className={classes.header} onClick={handleOpen}>
						<ChevronRightIcon
							style={{
								transform: open ? 'rotate(90deg)' : 'none',
								transition: 'transform .2s ease'
							}}
						/>
						portfolio
					</div>
					<div
						className={classes.files}
						style={{ display: open ? 'flex' : 'none' }}
					>
						{explorerTabs.map((tab) => (
							<ExplorerTab
								key={tab.value}
								title={tab.title}
								value={tab.value}
								logoSrc={tab.logoSrc}
							/>
						))}
					</div>
				</div>
			</div>
		</Hidden>
	);
};


export default Explorer;