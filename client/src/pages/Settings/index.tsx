import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useThemeActions, themes } from '../../contexts/ThemeContext';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '1rem 2rem',
		background: theme.palette.secondary.main,
		color: theme.palette.secondary.contrastText,
	},
	grid: {
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			alignItems: 'center'
		}
	},
	themeContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		margin: '1.5rem 0',
		padding: '0 1.5rem'
	},
	iconContainer: {
		position: 'relative',
		overflow: 'hidden',
		marginBottom: '1rem',
		background: '#42f5ef',
		borderRadius: '50%',
		padding: '1rem'
	},
	icon: {
		width: theme.spacing(10)
	}
}));

const Settings = () => {
	const classes = useStyles();
	const { changeTheme } = useThemeActions();

	return (
		<div className={classes.root}>
			<h2>Manage Themes</h2>
			<Grid container spacing={3} className={classes.grid}>
				{themes.map((theme, i) => (
					<Grid item xs={3} key={theme.name}>
						<div className={classes.themeContainer}>
							<div className={classes.iconContainer}>
								<img className={classes.icon} src={theme.image} alt='' />
							</div>
							<Button
								variant='contained'
								onClick={() => changeTheme(themes[i].value)}
							>
								{theme.name}
							</Button>
						</div>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Settings;