import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	}
}));

const About = () => {
	const classes = useStyles();


	return (
		<div className={classes.root}>
			about
		</div>
	);
};

export default About;