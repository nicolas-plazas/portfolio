import { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import { SectionsRefContext } from '../context/SectionsRefContext';
import { useTypewriter, useBlink } from '../hooks/useTypewriter';

const Experience = () => {
	const sectionsContext = useContext(SectionsRefContext);

	const { ref, inView } = useInView({
		/* Optional options */
		threshold: 0,
	});

	const sectionTitle = 'Experiencia';
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
			ref={sectionsContext?.experience}
			className='min-h-screen flex flex-col justify-center mt-10 snap-start'
		>
			<h2
				ref={ref}
				className='mb-7 text-2xl font-semibold text-cyan-/-aqua'
			>{`${sectionTitleWithTypeWriterEffect}${blinkEffect ? '|' : ''}`}</h2>
			{/* <p className='w-full mt-5 text-base font-normal text-chetwode-blue'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
				dolore ea est deleniti voluptate assumenda iusto velit eos blanditiis
				nulla aut eaque, iure vel possimus officiis sunt id pariatur nesciunt?
			</p> */}

			<div className='w-full h-auto p-4 rounded-lg'>
				<h3 className='mb-1 text-lg font-medium text-coral-red'>
					Fullstack JavaScript Developer - Verano Ingeniería
				</h3>
				<p className='mb-6 text-sm text-coral-red-200'>Oct 2018 - Jun 2022</p>

				<ul className='grid grid-cols-1 gap-6 text-base font-normal text-chetwode-blue'>
					<li>
						Escribir código moderno, robusto, escalable, accesible, e
						interactivo con un excelente "performance" para diversos clientes
						externos e internos.
					</li>
					<li>
						Trabajar con diversas tecnologías y lenguajes de programación tales
						como JavaScript, TypeScript, Next JS, React JS, Node JS, PostgreSQL,
						etc.
					</li>
					<li>
						Liderar y dar seguimiento a un equipo de desarrollo de tres
						personas.
					</li>
					<li>Seleccionar el "stack" tecnológico para cada proyecto.</li>
				</ul>
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
						position: relative;
						padding-left: 1rem;
					}

					li::before {
						content: '▹';
						position: absolute;
						left: 0;
						color: #00f1ff;
						margin-right: 0.5rem;
					}
				`}
			</style>
		</section>
	);
};

export default Experience;
