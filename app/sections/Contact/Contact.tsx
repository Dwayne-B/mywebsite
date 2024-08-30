import dynamic from "next/dynamic";
const ContactForm = dynamic(
	() => import("../../components/ContactForm/ContactForm")
);
function Contact() {
	return (
		<>
			<div
				id='contact'
				className=' section    '>
				<h2 className='m-auto'>Your Vision, My Code</h2>
				<ContactForm />
			</div>
		</>
	);
}

export default Contact;
