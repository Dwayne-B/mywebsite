"use client";
import dynamic from 'next/dynamic';

const Link = dynamic(() => import('next/link'), { ssr: false });

const Hamburger = dynamic(() => import('hamburger-react'), { ssr: false });
import Image from 'next/image';
import Logo from "../../../public/assets/logo/logo-lg.webp";
import { useState } from "react";
import "./Nav.scss";


import { motion } from "framer-motion";

interface NavProps {
	modalIsOpen: boolean;
}

const variants = {
	open: {
		right: 0,
		width: "100%",
		transition: { type: "spring", stiffness: 120, damping: 8 },
	},
	close: {
		width: "fit-content",
		opacity: "1",
		right: "-65px",
		transition: { type: "spring", stiffness: 200, damping: 10 },
	},
};

function Nav({ modalIsOpen }: NavProps) {

	const [isOpen, setOpen] = useState(false);
	const [color, setColor] = useState("#fff");
	return (
		<nav
			className={` ${
				modalIsOpen ? "z-[3]" : "z-[999]"
			} flex justify-between items-center  px-10 py-6 w-full  fixed bg-[#000000] right-0 `}>
			<motion.div
				variants={variants}
				initial={"close"}
				animate={isOpen ? "open" : "close"}
				className=' lg:max-w-[33%]
        absolute right-0 top-0 bg-black h-screen w-[100%]  py-40 flex flex-col items-center gap-5 z-[1] '>
				<ul className='  flex flex-col items-center gap-8  '>
					<li
						onClick={() => {
							setOpen((prev) => !prev);
						}}>
						<Link href='#projects'>Projects</Link>
					</li>
					<li
						onClick={() => {
							setOpen((prev) => !prev);
						}}>
						<Link href='#about'>About</Link>
					</li>
					<li
						onClick={() => {
							setOpen((prev) => !prev);
						}}>
						<Link href='#contact'>Contact</Link>
					</li>
					<li
						onClick={() => {
							setOpen((prev) => !prev);
						}}
						className='text-center '>
						{/* replace undefined with resume. add a plain text and creative version to download */}
					</li>
				</ul>
			</motion.div>
			{/* {isOpen && (

			)}
   */}

<Image
					priority
					src={Logo.src}
					alt='Dwayne B Logo'
					width={115}
					height={34}/>




			<Hamburger
				color={color}
				onToggle={() => {
					setColor((prev) => {
						prev = isOpen ? "#fff" : "#6fe7b7";
						return prev;
					});
				}}
				toggled={isOpen}
				toggle={setOpen}
			/>
		</nav>
	);
}

export default Nav;
