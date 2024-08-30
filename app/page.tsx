"use client";
import { useState } from "react";
import "./page.scss";
import dynamic from "next/dynamic";
const Nav = dynamic(() => import("./components/Nav/Nav"));
const About = dynamic(() => import("./sections/About/About"));
const Projects = dynamic(() => import("./sections/Projects/Projects"));
const Contact = dynamic(() => import("./sections/Contact/Contact"));
const Footer = dynamic(() => import("./sections/Footer/Footer"));
const Hero = dynamic(() => import("./sections/Hero/Hero"));
export default function App() {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	return (
		<main className='text-white  '>
			<Nav modalIsOpen={modalIsOpen} />
			<Hero />
			<About />
			<Projects
				modalIsOpen={modalIsOpen}
				setModalIsOpen={setModalIsOpen}
			/>
			<Contact />
			<Footer />
		</main>
	);
}
