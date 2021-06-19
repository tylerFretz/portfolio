/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		padding: '0 1rem',
		justifyContent: 'center',
		alignItems: 'center',
		color: theme.palette.primary.contrastText,
		height: theme.spacing(5),
		borderLeft: `1px solid ${theme.palette.primary.main}`,
		borderRight: `1px solid ${theme.palette.primary.main}`,
	},
	logo: {
		width: theme.spacing(2),
		height: theme.spacing(2),
		marginRight: theme.spacing(1)
	}
}));

interface TabProps {
	open: boolean,
	title: string,
	value: string,
	logoSrc: string | undefined,
	handleClick: (value: string) => void
}

const Tab = ({
	open,
	title,
	value,
	logoSrc,
	handleClick
}: TabProps) => {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<div
			className={classes.root}
			style={{
				backgroundColor: open ? theme.palette.secondary.main : theme.palette.primary.main,
				borderTop: open ? '1px solid #FFD700' : '1px solid #1F2428'
			}}>
			<img className={classes.logo} src={logoSrc} alt='tab icon' />
			<p>{title}</p>
		</div>
	);
};

export default Tab;
