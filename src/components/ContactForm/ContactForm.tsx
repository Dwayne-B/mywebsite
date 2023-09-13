import { useForm } from '@formspree/react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import './ContactForm.scss';
function ContactForm() {
	const formik = useFormik({
		initialValues: { name: '', email: '', msg: '' },
		onSubmit: (values) => {
			useForm('Contact-form');
		},
	});
	const ContactFormAnimation = {
		show: {
			width: '100%',
			transition: {
				duration: 1,
			},
		},
	};

	return (
		<form
			target=''
			action='https://formspree.io/f/xvonrryo'
			method='POST'
			className='Contact-form '>
			<span>
				<motion.label
					variants={ContactFormAnimation}
					whileInView='show'
					htmlFor='email'>
					Name
				</motion.label>
				<input
					id='name'
					name='name'
					type='text'
					onChange={formik.handleChange}
					value={formik.values.name}
				/>
			</span>
			<span>
				<motion.label
					variants={ContactFormAnimation}
					whileInView='show'
					htmlFor='email'>
					Email{' '}
				</motion.label>
				<input
					id='email'
					name='email'
					type='email'
					onChange={formik.handleChange}
					value={formik.values.email}
				/>
			</span>
			<span>
				<motion.label
					variants={ContactFormAnimation}
					whileInView='show'
					htmlFor='msg'>
					Say Hello
				</motion.label>
				<textarea
					id='msg'
					name='msg'
					style={{
						'height': '125px',
						color: 'black',
						padding: '10px',
					}}
					onChange={formik.handleChange}
					value={formik.values.msg}></textarea>
			</span>
			<motion.button
            className="contact__button hover:border-purple-300 hover:bg-slate-900 w-44 p-3 rounded-2xl border border-emerald-300 "
			type='submit'
			>
				Send
			</motion.button>
		</form>
	);
}

export default ContactForm;