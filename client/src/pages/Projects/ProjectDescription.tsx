import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import codeIcon from '../../assets/codeIcon.svg';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '90%',
		padding: '2rem 2rem',
		background: 'linear-gradient(55deg,rgba(0,0,0,.22),hsla(0,0%,100%,.25))',
		color: theme.palette.secondary.contrastText
	},
	label: {
		color: '#f9826c',
		marginRight: '.5rem'
	},
	list: {
		listStyle: 'none',
		padding: 0
	},
	listItem: {
		display: 'inline-block',
		padding: '.5rem 1rem',
		margin: '.5rem .5rem .5rem 0',
		border: `1px solid ${theme.palette.secondary.contrastText}`,
		borderRadius: '5px'
	},
	linkContainter: {
		display: 'flex',
		alignItems: 'center'
	},
	link: {
		textDecoration: 'none',
		color: '#FFF',
		marginLeft: '.5rem',
		'&:hover': {
			color: '#f9826c'
		}
	}
}));

interface Project {
	name: string,
	description: string,
	url?: string,
	gitHubUrl: string,
	technologies: string[]
}

const ProjectDescription = (
	{ name,
		description,
		url,
		gitHubUrl,
		technologies
	}: Project) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<p>
				<strong className={classes.label}>Name: </strong>
				{name}
			</p>
			<summary>
				<strong className={classes.label}>Description: </strong>
				{description}
			</summary>
			<p><strong className={classes.label}>Technology Stack: </strong></p>
			<ul className={classes.list}>
				{technologies.map((tech) => (
					<li className={classes.listItem} key={tech}>{tech}</li>
				))}
			</ul>
			<div className={classes.linkContainter}>
				<img src={codeIcon} alt='view code' />
				<a href={gitHubUrl} className={classes.link}>View code in GitHub</a>
			</div>
			{url && (
				<div className={classes.linkContainter}>
					<OpenInBrowserIcon />
					<a href={url} className={classes.link}>View live app</a>
				</div>
			)}
		</div>
	);
};

export default ProjectDescription;