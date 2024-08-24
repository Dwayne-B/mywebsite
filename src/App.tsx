import { useState } from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

function App() {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	return (
		<div className='text-white app-container '>
			<Nav modalIsOpen={modalIsOpen} />
			<Hero />
			<About />
			<Projects
				modalIsOpen={modalIsOpen}
				setModalIsOpen={setModalIsOpen}
			/>
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
