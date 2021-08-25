import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import { getProjects } from '../../services/projectsService';
import ProjectDescription from './ProjectDescription';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '2rem'
	},
	carouselItem: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	gif: {
		marginTop: '3rem',
		padding: '.25rem',
		background: '#f9826c'
	},
	imageContainer: {
		display: 'flex',
		padding: '2rem',
		marginTop: '2rem',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column'
		}
	},
	image: {
		margin: '0 2rem',
		padding: '.25rem',
		background: '#f9826c',
		width: theme.spacing(30),
		[theme.breakpoints.down('sm')]: {
			margin: '1rem 0'
		}
	}
}));

interface Project {
	name: string,
	description: string,
	url?: string,
	gitHubUrl: string,
	images: string[],
	technologies: string[]
}

const Projects = () => {
	const classes = useStyles();
	const [projects, setProjects] = useState<Project[]>([]);

	useEffect(() => {
		getProjects()
			.then(p => setProjects(p))
			.catch(err => console.log(err));
	}, []);

	return (
		<>
			<Helmet>
				<title>Tyler Fretz | Projects</title>
			</Helmet>
			<div className={classes.root}>
				<Carousel
					autoPlay={false}
					animation='slide'
					indicators={false}
					navButtonsAlwaysVisible={true}
				>
					{projects.map((p) => (
						<div className={classes.carouselItem} key={p.name}>
							<ProjectDescription
								name={p.name}
								description={p.description}
								url={p.url}
								gitHubUrl={p.gitHubUrl}
								technologies={p.technologies}
							/>
							{p.images.length === 1 && (
								<img
									className={classes.gif}
									src={p.images[0]}
									alt='project gif'
								/>
							)}
							{p.images.length > 1 && (
								<div className={classes.imageContainer}>
									{p.images.map((image) => (
										<img
											key={image}
											className={classes.image}
											src={image}
											alt='project'
										/>
									))}
								</div>
							)}
						</div>
					))}
				</Carousel>
			</div>
		</>
	);
};

export default Projects;