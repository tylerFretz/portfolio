/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import MinimizeIcon from '@material-ui/icons/Minimize';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CloseIcon from '@material-ui/icons/Close';
import vsCodeLogo from '../assets/vsCodeLogo.svg';
import { useTabState, useTabActions } from '../contexts/TabContext';
import { downloadResume } from '../services/downloadService';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: theme.palette.primary.contrastText,
		backgroundColor: theme.palette.primary.main,
		height: '3vh',
		paddingLeft: '.5rem',
		fontSize: '0.85rem',
		borderBottom: '1px solid #112121',
		[theme.breakpoints.down('sm')]: {
			height: '5vh',
			fontSize: '1rem'
		}
	},
	logo: {
		width: theme.spacing(2.5),
		height: theme.spacing(2.5),
		marginRight: theme.spacing(1)
	},
	title: {
		textAlign: 'center',
		flex: '1 1',
		opacity: 0.8,
		userSelect: 'none',
		whiteSpace: 'nowrap'
	},
	titleBarSubContainer: {
		display: 'flex',
		alignItems: 'center',
		marginRight: 'auto',
		flex: '1 1'
	},
	titleBarItem: {
		lineHeight: 0,
		padding: '0 .5rem',
		opacity: 0.8,
		userSelect: 'none',
		'&:hover': {
			opacity: 1,
			background: 'rgba(243, 184, 184, .2)'
		}
	},
	closeIcon: {
		lineHeight: 0,
		padding: '0 .5rem',
		opacity: 0.8,
		'&:hover': {
			opacity: 1,
			background: '#FF0000'
		}
	}
}));

const TitleBar = () => {
	const classes = useStyles();
	const history = useHistory();
	const { currentTab } = useTabState();
	const { setCurrentTab } = useTabActions();
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
	const items = ['File', 'Edit', 'View', 'Go', 'Run', 'Terminal', 'Help'];

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleDownload = () => {
		downloadResume();
		handleClose();
	};

	const handleContact = () => {
		history.push('/contact');
		setCurrentTab({ title: 'contact.css', value: 'contact' });
		handleClose();
	};

	return (
		<section className={classes.root}>
			<div className={classes.titleBarSubContainer}>
				<img className={classes.logo} alt='vsCode Icon' src={vsCodeLogo} />
				<Hidden smDown>
					{items.map((item) => (
						<div
							key={item}
							className={classes.titleBarItem}
							onClick={handleClick}
						>
							<p>{item}</p>
						</div>
					))}
				</Hidden>
			</div>
			<p className={classes.title}>{currentTab.title} - Tyler Fretz</p>
			<div className={classes.titleBarSubContainer} style={{ justifyContent: 'flex-end' }}>
				<Hidden smDown>
					<div className={classes.titleBarItem} onClick={handleClick}>
						<MinimizeIcon />
					</div>
					<div className={classes.titleBarItem} onClick={handleClick}>
						<CheckBoxOutlineBlankIcon />
					</div>
				</Hidden>
				<div className={classes.closeIcon} onClick={handleClick}>
					<CloseIcon />
				</div>
			</div>
			<Menu
				id="title-bar-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem onClick={handleDownload}>Download my resume</MenuItem>
				<MenuItem onClick={handleContact}>Send me a message</MenuItem>
			</Menu>
		</section>
	);
};

export default TitleBar;