import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import checkmarkIcon from '../assets/checkmarkIcon.svg';
import errorsIcon from '../assets/errorsIcon.svg';
import warningsIcon from '../assets/warningsIcon.svg';
import openChangesIcon from '../assets/openChangesIcon.svg';
import notificationsIcon from '../assets/notificationsIcon.svg';
import codeBranchIcon from '../assets/codeBranchIcon.svg';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100vw',
		height: '2.5vh',
		background: '#5677DB',
		color: '#FFF',
		display: 'flex',
		justifyContent: 'space-between',
		borderTop: '1px solid #112121',
		padding: '0.5rem .5rem',
		overflow: 'hidden',
		userSelect: 'none',
		[theme.breakpoints.down('sm')]: {
			height: '3vh',
		}
	},
	subContainer: {
		display: 'flex',
		alignItems: 'center'
	},
	tab: {
		display: 'flex',
		alignItems: 'center',
		margin: '0 .3rem',
		padding: '0 .4rem',
		fontSize: '.8rem',
		lineHeight: 0,
		cursor: 'pointer',
		'&:hover': {
			background: '#539FD9'
		},
		[theme.breakpoints.down('sm')]: {
			margin: 0
		}
	},
	icon: {
		width: '2rem',
		height: '2rem',
		lineHeight: 0,
		padding: '0 .5rem',
	}
}));

const Footer = () => {
	const classes = useStyles();

	return (
		<footer className={classes.root}>
			<div className={classes.subContainer}>
				<div className={classes.tab}>
					<img
						className={classes.icon}
						src={openChangesIcon}
						alt='Code branch icon'
					/>
					<img
						className={classes.icon}
						src={codeBranchIcon}
						alt='Code branch icon'
					/>
					<p>main</p>
				</div>
				<div className={classes.tab}>
					<img
						className={classes.icon}
						src={errorsIcon}
						alt='Errors icon'
					/>
					<p>0</p>
					<img
						className={classes.icon}
						src={warningsIcon}
						alt='Warnings icon'
					/>
					<p>0</p>
				</div>
			</div>
			<div className={classes.subContainer}>
				<Hidden smDown>
					<div className={classes.tab}>
						<p>TypeScript React</p>
					</div>
				</Hidden>
				<div className={classes.tab}>
					<img
						className={classes.icon}
						src={checkmarkIcon}
						alt='Checkmark icon'
					/>
					<p>Prettier</p>
				</div>
				<div className={classes.tab}>
					<img
						className={classes.icon}
						src={notificationsIcon}
						alt='Notifications icon'
					/>
				</div>
			</div>
		</footer>
	);
};

export default Footer;