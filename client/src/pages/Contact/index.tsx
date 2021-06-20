import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	}
}));

const Contact = () => {
	const classes = useStyles();


	return (
		<div className={classes.root}>
			contact
		</div>
	);
};

export default Contact;