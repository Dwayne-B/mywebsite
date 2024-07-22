/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useForm } from '@formspree/react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import './ContactForm.scss';

function ContactForm() {
	const formik = useFormik({
		initialValues: { name: '', email: '', msg: '' },
		onSubmit: (_values) => {
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
			className='Contact-form flex flex-col my-12 max-w-[28rem] m-auto'>
			<span>
				<motion.label
					variants={ContactFormAnimation}
					whileInView='show'
					htmlFor='email'>
					Name
				</motion.label>
				<input
				className='p-3'
					id='name'
					name='name'
					type='text'
					placeholder='Dwayne B'
					onChange={formik.handleChange}
					value={formik.values.name}
				/>
			</span>
			<span>
				<motion.label
					variants={ContactFormAnimation}
					whileInView='show'
					htmlFor='email' >
					Email{' '}
				</motion.label>
				<input
				placeholder='myname@email.com'
					className='p-3'
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
					htmlFor='msg'
					>
					How can I help?
				</motion.label>
				<textarea
				placeholder='I need a fast responsive website!'
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