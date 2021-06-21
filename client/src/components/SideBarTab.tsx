/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useTabState, useTabActions } from '../contexts/TabContext';


const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: theme.palette.primary.contrastText,
		height: theme.spacing(6),
		cursor: 'pointer',
		userSelect: 'none',
		'&:hover': {
			background: 'rgba(250, 249, 249, 0.05)'
		}
	},
	logo: {
		width: theme.spacing(3),
		height: theme.spacing(3),
	}
}));

interface TabProps {
	value: string,
	logoSrc: string | undefined,
}

const Tab = ({
	value,
	logoSrc,
}: TabProps) => {
	const classes = useStyles();
	const history = useHistory();
	const { currentTab } = useTabState();
	const { setCurrentTab } = useTabActions();
	const open = currentTab === value;

	const handleClick = () => {
		setCurrentTab(value);
		history.push(`/${value}`);
	};

	return (
		<div
			className={classes.root}
			onClick={handleClick}
			style={{ borderLeft: open ? '1px solid #FFD700' : '1px solid #1F2428' }}>
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
