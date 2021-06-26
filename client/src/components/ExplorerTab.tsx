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
		paddingLeft: '1.5rem',
		alignItems: 'center',
		color: theme.palette.primary.contrastText,
		cursor: 'pointer',
		userSelect: 'none',
		'&:hover': {
			background: 'rgba(250, 249, 249, 0.05)'
		}
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

const ExplorerTab = ({
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
		<div className={classes.root} onClick={handleClick}>
			<img
				className={classes.logo}
				src={logoSrc}
				alt='File explorer tab icon'
			/>
			<p style={{ opacity: open ? 1 : 0.6, userSelect: 'none', lineHeight: 0 }}>{title}</p>
		</div>
	);
};


export default ExplorerTab;
