/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useTabState, useTabActions } from '../contexts/TabContext';


const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		display: 'flex',
		margin: '5% 0%',
		justifyContent: 'center',
		alignItems: 'center',
		color: theme.palette.primary.contrastText,
		height: theme.spacing(5),
		cursor: 'pointer',
		userSelect: 'none',
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
	const theme = useTheme();
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
			style={{
				backgroundColor: open ? theme.palette.primary.main : theme.palette.secondary.main,
				borderLeft: open ? '1px solid #FFD700' : '1px solid #1F2428'
			}}>
			<img
				className={classes.logo}
				style={{
					opacity: open ? 1 : 0.7
				}}
				src={logoSrc}
				alt='sidebar tab icon'
			/>
		</div>
	);
};

export default Tab;
