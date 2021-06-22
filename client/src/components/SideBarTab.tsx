/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useTabState, useTabActions } from '../contexts/TabContext';


const useStyles = makeStyles((theme) => ({
	root: {
		width: '4vw',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: theme.palette.primary.contrastText,
		height: theme.spacing(6),
		cursor: 'pointer',
		userSelect: 'none',
		'&:hover': {
			background: 'rgba(250, 249, 249, 0.05)'
		},
		[theme.breakpoints.down('sm')]: {
			width: '10vw'
		}
	},
	logo: {
		width: theme.spacing(3),
		height: theme.spacing(3),
	}
}));

interface TabProps {
	title: string,
	value: string,
	logoSrc: string | undefined,
}

const Tab = ({
	title,
	value,
	logoSrc,
}: TabProps) => {
	const classes = useStyles();
	const history = useHistory();
	const { currentTab } = useTabState();
	const { setCurrentTab } = useTabActions();
	const open = currentTab.value === value;

	const handleClick = () => {
		setCurrentTab({ title, value });
		history.push(`/${value}`);
	};

	return (
		<div
			className={classes.root}
			onClick={handleClick}
			style={{ borderLeft: open ? '1px solid #FFD700' : '' }}>
			<img
				className={classes.logo}
				style={{ opacity: open ? 1 : 0.5 }}
				src={logoSrc}
				alt='sidebar tab icon'
			/>
		</div>
	);
};

export default Tab;
