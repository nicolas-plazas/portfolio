import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useTypewriter, useBlink } from '../hooks/useTypewriter';

import projectImg from '../../public/images/veranoPage.jpg';
import projectImg2 from '../../public/images/timeTracker.jpg';
import { SectionsRefContext } from '../context/sectionsRefContext';
import { useContext } from 'react';

const Projects = () => {
	const sectionsContext = useContext(SectionsRefContext);

	const { ref, inView } = useInView({
		/* Optional options */
		threshold: 0,
	});

	const sectionTitle = 'Projects';
	const sectionTitleWithTypeWriterEffect = useTypewriter(
		sectionTitle,
		150,
		inView,
	);
	const blinkEffect = useBlink({
		textWithoutEffect: sectionTitle,
		textWithEffect: sectionTitleWithTypeWriterEffect,
		speed: 500,
		repeated: 3,
	});

	return (
		<section
			ref={sectionsContext?.projects}
			className='min-h-screen flex flex-col justify-center'
		>
			<h2 className='mb-7 text-2xl font-semibold text-cyan-/-aqua'>{`${sectionTitleWithTypeWriterEffect}${
				blinkEffect ? '|' : ''
			}`}</h2>

			<div ref={ref} className='h-auto w-full'>
				<article className='flex flex-col md:grid md:grid-cols-2 mb-10'>
					<div className='h-52 w-full relative md:h-auto'>
						<Image
							src={projectImg}
							layout='fill'
							className='rounded-t-md md:rounded-l-md object-top'
							objectFit='cover'
						/>
					</div>
					<div className='p-6 rounded-b-md bg-[#242632]'>
						<h3 className='mb-5 text-2xl text-supernova'>
							<a href='/'>Nombre del proyecto</a>
						</h3>
						<p className='mb-4 text-chetwode-blue'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
							fugiat illum ab soluta tenetur delectus ipsum porro odio ipsam
							assumenda. Dolorum repellendus corporis cumque esse rerum ullam
							voluptates veniam quod?
						</p>

						<ul className='flex flex-wrap mb-3 text-supernova'>
							<li className='py-1 px-3 border-2 rounded-2xl w-fit'>HTML</li>
							<li className='py-1 px-3 border-2 rounded-2xl w-fit'>
								JavaScript
							</li>
							<li className='py-1 px-3 border-2 rounded-2xl w-fit'>
								JavaScript
							</li>
							<li className='py-1 px-3 border-2 rounded-2xl w-fit'>React</li>
							<li className='py-1 px-3 border-2 rounded-2xl w-fit'>Next JS</li>
						</ul>

						<div className='flex flex-wrap my-10'>
							<a
								href='/'
								className='my-2 mr-3 px-4 py-2 border-2 rounded-2xl text-supernova'
							>
								Abrir
							</a>
							<a
								href='/'
								className='my-2 px-4 py-2 border-2 rounded-2xl text-supernova'
							>
								Repositorio
							</a>
						</div>
					</div>
				</article>

				<article className='flex flex-col md:grid md:grid-cols-2'>
					<div className='h-52 w-full relative md:h-auto md:order-2'>
						<Image
							src={projectImg2}
							layout='fill'
							objectFit='cover'
							className='rounded-t-md object-center'
						/>
					</div>
					<div className='p-6 rounded-b-md bg-[#242632]'>
						<h3 className='mb-5 text-2xl text-supernova'>
							<a href='/'>Nombre del proyecto</a>
						</h3>
						<p className='mb-4 text-chetwode-blue'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
							fugiat illum ab soluta tenetur delectus ipsum porro odio ipsam
							assumenda. Dolorum repellendus corporis cumque esse rerum ullam
							voluptates veniam quod?
						</p>

						<ul className='flex flex-wrap mb-3 text-supernova'>
							<li className='py-1 px-3 border-2 rounded-2xl w-fit'>HTML</li>
							<li className='py-1 px-3 border-2 rounded-2xl w-fit'>
								JavaScript
							</li>
							<li className='py-1 px-3 border-2 rounded-2xl w-fit'>
								JavaScript
							</li>
							<li className='py-1 px-3 border-2 rounded-2xl w-fit'>React</li>
							<li className='py-1 px-3 border-2 rounded-2xl w-fit'>Next JS</li>
						</ul>

						<div className='flex flex-wrap my-10'>
							<a
								href='/'
								className='my-2 mr-3 px-4 py-2 border-2 rounded-2xl text-supernova'
							>
								Abrir
							</a>
							<a
								href='/'
								className='my-2 px-4 py-2 border-2 rounded-2xl text-supernova'
							>
								Repositorio
							</a>
						</div>
					</div>
				</article>
			</div>

			<style jsx>
				{`
					h2::after {
						content: '';
						display: block;
						width: 100%;
						height: 2px;
						background-color: #00f1ff;
						margin-top: 0.5rem;
					}

					li {
						margin: 10px 10px 5px 0;
					}

					.project-links {
						grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
					}
				`}
			</style>
		</section>
	);
};

export default Projects;
