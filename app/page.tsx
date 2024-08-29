"use client";

import { useState } from "react";
import "./page.scss";
import Nav from "./components/Nav/Nav";
// import Hero from "./sections/Hero/Hero";
// import About from "./sections/About/About";
// import Projects from "./sections/Projects/Projects";
// import Contact from "./sections/Contact/Contact";
// import Footer from "./sections/Footer/Footer";
import dynamic from "next/dynamic";
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
