import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	}
}));

const GitHub = () => {
	const classes = useStyles();


	return (
		<div className={classes.root}>
			github
		</div>
	);
};

export default GitHub;