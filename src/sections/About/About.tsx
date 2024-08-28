function About() {
	return (
		<div
			id='about'
			className='overflow-hidden section flex flex-col md:flex-row gap-14  items-center  '>
			<article className='flex flex-col gap-8 justify-center lg:text-left flex-1 w-full '>
				<h2
					className='lg:self-start
  '>
					Hi, I’m{" "}
					<span className='text--highlight '>Dwayne Front-End Developer</span>
				</h2>
				<p className='px-3 '>
					{" "}
					I'm an
					<span className='text--highlight'>
						{" "}
						independent creative developer{" "}
					</span>{" "}
					I build
					<span style={{ color: "#757171" }}> (and occassionally design) </span>
					products for the web and mobile world!
				</p>
				<div className='flex md:gap-16 gap-6   '>
					<a
						href='#projects'
						className='flex-1'>
						<button className=' hover:border-purple-300 hover:bg-slate-900  p-3 rounded-2xl border border-emerald-300 w-full'>
							Projects
						</button>
					</a>
					<a
						href='#contact'
						className='flex-1'>
						<button className=' hover:border-purple-300 hover:bg-slate-900  p-3 rounded-2xl border border-emerald-300  w-full '>
							Contact
						</button>
					</a>
				</div>
			</article>
			{/* <picture className=''>
				<source
					type='image/png'
					srcSet={AboutImg}
				/>
				<img
					src={AboutImg}
					alt='glasses sitting on keyboard with a monitor displaying code'
				/>
			</picture> */}
			{/* spline*/}
			<SplineElm />
		</div>
	);
}

export default About;
import Spline from "@splinetool/react-spline";

//https://prod.spline.design/S9dvttkMTwGjuw7V/scene.splinecode good 1
function SplineElm() {
	return (
		<div className=' flex-1  '>
			<Spline scene='https://prod.spline.design/S9dvttkMTwGjuw7V/scene.splinecode' />
		</div>
	);
}

//
