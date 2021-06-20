import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	}
}));

const Settings = () => {
	const classes = useStyles();


	return (
		<div className={classes.root}>
			settings
		</div>
	);
};

export default Settings;