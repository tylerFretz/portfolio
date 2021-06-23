import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import EmailIcon from '@material-ui/icons/Email';
import PlaceIcon from '@material-ui/icons/Place';
import PhoneIcon from '@material-ui/icons/Phone';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import me from '../../assets/me.jpg';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '5%',
		padding: '1rem 2rem',
		background: theme.palette.secondary.main,
		color: theme.palette.secondary.contrastText,
		display: 'flex',
		letterSpacing: '1px',
		justifyContent: 'space-around',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			alignItems: 'center'
		}
	},
	textContainer: {
		display: 'flex',
		flexDirection: 'column'
	},
	blurb: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '.75rem',
		background: '#0BBBA0',
		borderTopRightRadius: '40%',
		borderTopLeftRadius: '40%',
		borderBottomRightRadius: '40%',
		width: '30%',
		fontSize: '1.2rem',
		fontWeight: 800,
		userSelect: 'none'
	},
	picture: {
		border: '1rem solid black',
		backgroundImage: `url(${me})`,
		backgroundPositionX: '50%',
		backgroundPositionY: '10%',
		borderRadius: '50%',
		width: theme.spacing(40),
		height: theme.spacing(40),
		[theme.breakpoints.down('sm')]: {
			width: theme.spacing(35),
			height: theme.spacing(35),
			margin: '2rem 0'
		}
	},
	title: {
		fontSize: '3rem',
		margin: '.2rem 0'
	},
	subTitle: {
		fontSize: '2.5rem',
		color: '#E6B450',
		margin: 0,
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.5rem'
		}
	},
	list: {
		listStyle: 'none',
		padding: 0
	},
	listItem: {
		display: 'flex',
		alignItems: 'center',
		fontWeight: 500,
		fontSize: '1.1rem',
		color: theme.palette.secondary.contrastText
	},
	link: {
		textDecoration: 'none',
		color: theme.palette.secondary.contrastText,
		margin: '.75rem 0',
		'&:hover': {
			color: '#34eb3a'
		}
	}
}));


const Home = () => {
	const classes = useStyles();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


	return (
		<div className={classes.root}>
			{isMobile && (
				<div className={classes.picture} />
			)}
			<div className={classes.textContainer}>
				<div className={classes.blurb}>Hello, I'm</div>
				<h1 className={classes.title}>Tyler Fretz</h1>
				<h3 className={classes.subTitle}>Mobile / Web Developer</h3>
				<ul className={classes.list}>
					<li className={classes.listItem}>
						<EmailIcon style={{ marginRight: '1rem' }} />
						<p>fretztyler@gmail.com</p>
					</li>
					<li className={classes.listItem}>
						<PlaceIcon style={{ marginRight: '1rem' }} />
						<p>Ontario, Canada</p>
					</li>
					<li className={classes.listItem}>
						<PhoneIcon style={{ marginRight: '1rem' }} />
						<p>(519) 766-7192</p>
					</li>
					<li className={classes.listItem}>
						<GitHubIcon style={{ marginRight: '1rem' }} />
						<a
							href='https://github.com/tylerFretz'
							className={classes.link}
						>GitHub</a>
					</li>
					<li className={classes.listItem}>
						<LinkedInIcon style={{ marginRight: '1rem' }} />
						<a
							href='https://github.com/tylerFretz'
							className={classes.link}
						>LinkedIn</a>
					</li>
				</ul>
			</div>
			{!isMobile && (
				<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
					<div className={classes.picture} />
				</div>
			)}
		</div>
	);
};

export default Home;