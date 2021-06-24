/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useTabState, useTabActions } from '../contexts/TabContext';


const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		padding: '0 1.4rem',
		justifyContent: 'center',
		alignItems: 'center',
		color: theme.palette.primary.contrastText,
		height: theme.spacing(4.5),
		cursor: 'pointer'
	},
	logo: {
		width: theme.spacing(2),
		height: theme.spacing(2),
		marginRight: theme.spacing(1)
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
	const theme = useTheme();
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
			style={{
				backgroundColor: open ? theme.palette.secondary.main : theme.palette.primary.main,
				borderTop: open ? '1px solid #FFD700' : ''
			}}>
			<img className={classes.logo} src={logoSrc} alt='tab icon' />
			<p style={{ opacity: open ? 1 : 0.7, userSelect: 'none' }}>{title}</p>
		</div>
	);
};

export default Tab;
