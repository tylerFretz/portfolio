import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import * as yup from 'yup';
import { sendEmail } from '../../services/contactService';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		paddingLeft: '2rem',
		width: '55%',
		color: '#FFF',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			padding: 0
		}
	},
	form: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column'
	}
}));

const validationSchema = yup.object().shape({
	firstName: yup.string().max(100).required('First name is required.'),
	lastName: yup.string().max(100).required('Last name is required.'),
	email: yup.string().email().max(100).required('Email is required.'),
	message: yup.string().max(3000).required('Message is required.')
});

const initialValues = {
	firstName: '',
	lastName: '',
	email: '',
	message: ''
};

interface Mail {
	firstName: string,
	lastName: string,
	email: string,
	message: string
};

const ContactForm = () => {
	const classes = useStyles();

	const onSubmit = async (values: Mail) => {
		const newEmail = {
			firstName: values.firstName,
			lastName: values.lastName,
			email: values.email,
			message: values.message
		};
		const data = await sendEmail(newEmail);
		if (data.status === 'Message Sent') {
			// eslint-disable-next-line no-alert
			alert('Message Sent!');
		} else {
			// eslint-disable-next-line no-alert
			alert('There was an error sending the message :(');
		}
	};

	return (
		<div className={classes.root}>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values, actions) => {
					onSubmit(values);
					actions.setSubmitting(false);
					actions.resetForm();
				}}
			>
				{({ values, errors }) => (
					<Form className={classes.form}>
						<h2>Send me a message</h2>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<Field
									component={TextField}
									name='firstName'
									label='First Name'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid item xs={12}>
								<Field
									component={TextField}
									name='lastName'
									label='Last Name'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid item xs={12}>
								<Field
									component={TextField}
									name='email'
									label='Email'
									variant='outlined'
									fullWidth
									required
								/>
							</Grid>
							<Grid item xs={12}>
								<Field
									component={TextField}
									name='message'
									label='Your Message'
									variant='outlined'
									fullWidth
									required
									multiline={true}
									rows={4}
								/>
							</Grid>
							<Grid item xs={12}>
								<Button
									type="submit"
									variant="contained"
									fullWidth
									disabled={Object.entries(errors).length !== 0}
								>
									Send Message
								</Button>
							</Grid>
						</Grid>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default ContactForm;