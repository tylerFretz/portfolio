import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	}
}));

const Home = () => {
	const classes = useStyles();


	return (
		<div className={classes.root}>
			Home
		</div>
	);
};

export default Home;