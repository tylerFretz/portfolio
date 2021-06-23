import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PlaceIcon from '@material-ui/icons/Place';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import WorldMap from '../../assets/worldMap.svg';
import ContactForm from './ContactForm';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: '5rem 2rem 2rem 2rem',
		backgroundImage: `url(${WorldMap})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundBlendMode: 'lighten',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column'
		}
	},
	cardContainer: {
		display: 'flex',
		flexDirection: 'column',
		width: '45%',
		[theme.breakpoints.down('sm')]: {
			width: '100%'
		}
	},
	card: {
		display: 'flex',
		background: theme.palette.secondary.main,
		justifyContent: 'space-around',
		alignItems: 'center',
		padding: '1rem',
		width: '100%',
		marginBottom: theme.spacing(3),
		boxShadow: '-1rem 0 3rem #000',
		borderRadius: '5px',
		color: '#FFF',
	},
	cardIcon: {
		margin: '0 3rem',
		[theme.breakpoints.down('sm')]: {
			margin: '0 1rem'
		}
	}
}));


const cards = [
	{ title: 'Address', value: 'Orillia, Ontario, Canada', icon: <PlaceIcon /> },
	{ title: 'Email', value: 'fretztyler@gmail.com', icon: <EmailIcon /> },
	{ title: 'Phone', value: '(519) 766-7192', icon: <PhoneIcon /> }
];

const Contact = () => {
	const classes = useStyles();


	return (
		<div className={classes.root}>
			<div className={classes.cardContainer}>
				{cards.map((card) => (
					<div className={classes.card} key={card.title}>
						<div className={classes.cardIcon}>
							{card.icon}
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', flex: '1 1' }}>
							<h3 style={{ fontSize: '1.5rem' }}>{card.title}</h3>
							<p style={{ fontSize: '1.1rem' }}>{card.value}</p>
						</div>
					</div>
				))}
			</div>
			<ContactForm />
		</div>
	);
};

export default Contact;