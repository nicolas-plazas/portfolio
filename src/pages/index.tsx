import type { NextPage } from 'next';
import { useRef, useState } from 'react';

import Presentation from '../components/Presentation';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';

import {
	IconMail,
	IconBrandGithub,
	IconBrandLinkedin,
	IconArrowNarrowUp,
} from '@tabler/icons';
import { useInView } from 'react-intersection-observer';

const Home: NextPage = () => {
	const { ref, inView } = useInView({
		/* Optional options */
		threshold: 0,
	});

	const [isOpen, setIsOpen] = useState(false);
	const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-coral-red transition ease transform duration-300`;

	const myRef = useRef<HTMLInputElement>(null);
	const executeScroll = () =>
		myRef.current?.scrollIntoView({ behavior: 'smooth' });

	return (
		<>
			<div className='overflow-y-auto snap-proximity md:snap-y max-h-screen'>
				<div ref={myRef} />
				<header className='fixed top-0 w-full h-24 px-6 bg-charade z-10'>
					<nav className='flex relative h-full items-center'>
						{/* Mobile Menu */}
						<button
							className='flex flex-col absolute right-0 h-12 w-12 border-coral-red border-2 rounded justify-center items-center focus:outline-none z-20 md:hidden'
							onClick={() => setIsOpen(!isOpen)}
						>
							<div
								className={`${genericHamburgerLine} ${
									isOpen ? 'rotate-45 translate-y-3 opacity-80' : 'opacity-80'
								}`}
							/>
							<div
								className={`${genericHamburgerLine} ${
									isOpen ? 'opacity-0' : 'opacity-80'
								}`}
							/>
							<div
								className={`${genericHamburgerLine} ${
									isOpen ? '-rotate-45 -translate-y-3 opacity-80' : 'opacity-80'
								}`}
							/>
						</button>
						<aside
							className={`flex items-center justify-center fixed top-0 bottom-0 right-0 h-screen bg-charade-400 text-center text-coral-red-50 transition-all ${
								isOpen
									? 'opacity-100 translate-x-0'
									: 'opacity-0 translate-x-full'
							}`}
						>
							<nav className='flex flex-col'>
								<ul className='text-xl font-medium'>
									<li className='mb-5'>
										<a href='/'>Skill</a>
									</li>
									<li className='mb-5'>
										<a href='/'>Experience</a>
									</li>
									<li className='mb-5'>
										<a href='/'>Projects</a>
									</li>
									<li className='mb-5'>
										<a href='href'>Contact</a>
									</li>
								</ul>

								<a
									href='/'
									className='border-coral-red border-2 py-3 text-center'
								>
									Resume
								</a>
							</nav>
						</aside>

						{/* Desktop menu */}
						<div className='hidden md:flex md:justify-end md:w-full text-coral-red'>
							<ul className='flex justify-between items-center text-sm'>
								<li className='mx-2'>
									<a href='/'>Skill</a>
								</li>
								<li className='mx-2'>
									<a href='/'>Experience</a>
								</li>
								<li className='mx-2'>
									<a href='/'>Projects</a>
								</li>
								<li className='mx-2'>
									<a href='/'>Contact</a>
								</li>
							</ul>

							<a
								href='/'
								className='border-coral-red border-2 py-2 px-4 ml-4 rounded text-center'
							>
								Resume
							</a>
						</div>
					</nav>
				</header>
				<main className='px-6 md:px-12 lg:px-44 2xl:px-96'>
					{/* <main className='px-6'> */}
					<Presentation sectionRef={ref} />
					<Skills />
					<Experience />
					<Projects />
				</main>
				<footer className='w-full h-auto py-12 px-7 mt-14 md:py-6'>
					<div className='flex flex-col items-center md:flex-row'>
						<p className='text-xs text-center mb-4 text-supernova-50 md:text-left md:text-sm md:mb-0'>
							Design & Developed by <b>Nicolas Plazas</b>
						</p>
						<ul className='flex justify-around w-full md:justify-end'>
							<li>
								<a href='mailto:nicolasplazas10@hotmail.com'>
									<IconMail size={36} className='text-supernova' />
								</a>
							</li>
							<li className='md:mx-3'>
								<a href='/'>
									<IconBrandGithub size={36} className='text-supernova' />
								</a>
							</li>
							<li>
								<a href='/'>
									<IconBrandLinkedin size={36} className='text-supernova' />
								</a>
							</li>
						</ul>
					</div>
				</footer>

				<style jsx>{`
					aside {
						width: min(75vw, 400px);
					}
				`}</style>
			</div>

			<button
				onClick={executeScroll}
				className={`flex justify-center items-center absolute bottom-2 md:bottom-24 right-1 h-14 w-14 rounded-full bg-supernova ${
					inView ? 'hidden' : 'block'
				} focus:outline-none`}
			>
				<IconArrowNarrowUp size={30} />
			</button>
		</>
	);
};

export default Home;
