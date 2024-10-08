import dynamic from "next/dynamic";
import Loading from "../../loading"
const ContactForm  = dynamic(() => import('../../components/ContactForm/ContactForm'), {
ssr:false,
loading:()=><Loading/>})
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
