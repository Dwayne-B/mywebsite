"use client";
import { useState, Suspense } from "react";
import "./page.scss";
import Nav from "./components/Nav/Nav";
import dynamic from "next/dynamic";
import Loading from "./loading";

// Dynamically import sections to enable lazy loading
const Hero = dynamic(() => import("./sections/Hero/Hero"));
const About = dynamic(() => import("./sections/About/About"));
const Projects = dynamic(() => import("./sections/Projects/Projects"), { ssr: false });
const Contact = dynamic(() => import("./sections/Contact/Contact"));
const Footer = dynamic(() => import("./sections/Footer/Footer"));

export default function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <main className='text-white'>
      <Nav modalIsOpen={modalIsOpen} />
      <Suspense fallback={<Loading />}>
        <Hero />
        <About />
        <Projects
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
}
