import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	}
}));

const Projects = () => {
	const classes = useStyles();


	return (
		<div className={classes.root}>
			projects
		</div>
	);
};

export default Projects;