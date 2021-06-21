import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import * as yup from 'yup';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		width: '60%',
		flexDirection: 'column',
		paddingLeft: '2rem'
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
	email: yup.string().max(100).required('Email is required.'),
	message: yup.string().max(3000).required('Message is required.')
});

const initialValues = {
	firstName: '',
	lastName: '',
	email: '',
	message: ''
};

const ContactForm = () => {
	const classes = useStyles();

	const onSubmit = () => console.log('submit');

	return (
		<div className={classes.root}>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{({ values, errors }) => (
					<Form className={classes.form}>
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
									rows={3}
								/>
							</Grid>
							<Grid item xs={12}>
								<Button
									type="submit"
									variant="contained"
									color="primary"
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