import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ContactForm from './ContactForm';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		padding: '2rem'
	},
	subContainer: {
		display: 'flex',
		marginTop: '2rem',
		justifyContent: 'space-around'
	},
	card: {
		display: 'flex',
		alignItems: 'center',
		padding: '2rem',
		width: '100%',
		marginBottom: theme.spacing(3),
		boxShadow: '-1rem 0 3rem #000'
	}
}));


const cards = [
	{ title: 'Address', value: 'Orillia, Ontario, Canada' },
	{ title: 'Email', value: 'fretztyler@gmail.com' },
	{ title: 'Phone', value: '(519) 766-7192' }
];

const Contact = () => {
	const classes = useStyles();


	return (
		<div className={classes.root}>
			<div className={classes.subContainer}>
				<div style={{ width: '40%' }}>
					{cards.map((card) => (
						<div className={classes.card} key={card.title}>
							<p>{card.title}</p>
							<p>{card.value}</p>
						</div>
					))}
				</div>
				<ContactForm />
			</div>
		</div>
	);
};

export default Contact;