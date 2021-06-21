import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import checkmarkIcon from '../assets/checkmarkIcon.svg';
import errorsIcon from '../assets/errorsIcon.svg';
import warningsIcon from '../assets/warningsIcon.svg';
import openChangesIcon from '../assets/openChangesIcon.svg';
import notificationsIcon from '../assets/notificationsIcon.svg';
import codeBranchIcon from '../assets/codeBranchIcon.svg';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100vw',
		height: '2vh',
		background: '#5677DB',
		color: '#FFF',
		display: 'flex',
		justifyContent: 'space-between',
		borderTop: '1px solid #112121',
		padding: '0 .5rem',
		overflow: 'hidden',
		userSelect: 'none',
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
		'&:hover': {
			background: '#539FD9'
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
		<div className={classes.root}>
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
				<div className={classes.tab}>
					<p>TypeScript React</p>
				</div>
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
		</div>
	);
};

export default Footer;