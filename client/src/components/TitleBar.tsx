import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import MinimizeIcon from '@material-ui/icons/Minimize';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CloseIcon from '@material-ui/icons/Close';
import vsCodeLogo from '../assets/vsCodeLogo.svg';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: theme.palette.primary.contrastText,
		backgroundColor: theme.palette.primary.main,
		height: theme.spacing(3),
		paddingLeft: '.5rem',
		fontSize: '0.85rem',
		borderBottom: '1px solid #000'
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
		userSelect: 'none'
	},
	titleBarSubContainer: {
		display: 'flex',
		flex: '1 1',
		alignItems: 'center',
		marginRight: 'auto',
		height: '100%'
	},
	widowItemsContainer: {
		display: 'flex',
		flex: '1 1',
		alignItems: 'center',
		justifyContent: 'flex-end',
		marginLeft: 'auto',
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
	const items = ['File', 'Edit', 'View', 'Go', 'Run', 'Terminal', 'Help'];

	return (
		<section className={classes.root}>
			<div className={classes.titleBarSubContainer}>
				<img className={classes.logo} alt='vsCode Icon' src={vsCodeLogo} />
				<Hidden smDown>
					{items.map((item) => (
						<div key={item} className={classes.titleBarItem}>
							<p>{item}</p>
						</div>
					))}
				</Hidden>
			</div>
			<p className={classes.title}>Tyler Fretz - Software Developer</p>
			<div className={classes.widowItemsContainer}>
				<div className={classes.titleBarItem}>
					<MinimizeIcon />
				</div>
				<div className={classes.titleBarItem}>
					<CheckBoxOutlineBlankIcon />
				</div>
				<div className={classes.closeIcon}>
					<CloseIcon />
				</div>
			</div>
		</section>
	);
};

export default TitleBar;