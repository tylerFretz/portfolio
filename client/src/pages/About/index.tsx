import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
import developer from '../../assets/developer.png';
import { downloadResume } from '../../services/downloadService';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '5%',
		padding: '1rem 2rem',
		background: theme.palette.secondary.main,
		color: theme.palette.secondary.contrastText,
		display: 'flex',
		justifyContent: 'space-around',
		letterSpacing: '1px',
		userSelect: 'none',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			alignItems: 'center'
		}
	},
	textContainer: {
		padding: '1rem 2rem',
		flex: '1 1',
		fontSize: '1.2rem'
	},
	imageContainer: {
		display: 'flex',
		flexDirection: 'column',
		marginRight: '2rem',
		marginTop: '10%',
		[theme.breakpoints.down('sm')]: {
			alignItems: 'center'
		}
	},
	image: {
		width: theme.spacing(25),
		height: theme.spacing(25),
		marginBottom: '15%'
	},
	download: {
		background: '#0bceaf',
		boxShadow: '0 0 0 3.2px rgba(0,123,255,.25)',
		color: '#FFF'
	},
	title: {
		fontSize: '2rem',
	},
	list: {
		listStyle: 'none',
		padding: 0
	},
	listItem: {
		display: 'inline-block',
		padding: '.5rem',
		margin: '.5rem',
		border: `1px solid ${theme.palette.secondary.contrastText}`,
		borderRadius: '5px'
	}
}));

const techs = [
	'JavaScript', 'TypeScript', 'Java',
	'React', 'React Native', 'Redux', 'Express',
	'MongoDB', 'PostgreSQL', 'Jest',
	'GraphQL', 'GitHub Actions', 'Git'
];

const About = () => {
	const classes = useStyles();


	return (
		<div className={classes.root}>
			<div className={classes.imageContainer}>
				<img className={classes.image} src={developer} alt='developer' />
				<Button
					variant='contained'
					onClick={() => downloadResume()}
					className={classes.download}
					endIcon={<GetAppIcon />}
				>
					Download Resume
				</Button>
			</div>
			<div className={classes.textContainer}>
				<h2 className={classes.title}>About Me</h2>
				<p>
					Hey there, I'm Tyler, a mobile and
					web developer who loves creative problem solving,
					building ambitious websites and apps, and Magic the Gathering.
				</p>
				<p>I regularly use the following technologies:</p>
				<ul className={classes.list}>
					{techs.map((tech) => (
						<li key={tech} className={classes.listItem}>{tech}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default About;