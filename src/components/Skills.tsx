import { useState, useEffect, useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import { SectionsRefContext } from '../context/SectionsRefContext';

import { useTypewriter, useBlink } from '../hooks/useTypewriter';
import randomColor from '../utils/randomColor';

const skillList = [
	'HTML',
	'CSS',
	'JavaScript',
	'React',
	'Redux',
	'Next JS',
	'Jest',
	'API Rest',
	'GraphQL',
	'Node JS',
	'Express JS',
	'Nest JS',
	'SQL',
	'PostgreSQL',
	'Mongo DB',
	'Git',
	'Postman',
];

const Skills = () => {
	const sectionsContext = useContext(SectionsRefContext);

	const { ref, inView } = useInView({
		/* Optional options */
		threshold: 0,
	});

	const sectionTitle = 'Habilidades';
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
	const [color, setColor] = useState<string[]>([]);

	useEffect(() => {
		color.length < skillList.length && setColor([...color, randomColor()]);
	}, [color]);

	return (
		<section
			ref={sectionsContext?.skills}
			className='min-h-screen flex flex-col justify-center mt-10 snap-center'
		>
			<h2
				ref={ref}
				className='mb-7 text-2xl font-semibold text-cyan-/-aqua'
			>{`${sectionTitleWithTypeWriterEffect}${blinkEffect ? '|' : ''}`}</h2>
			<ul className='grid gap-5'>
				{skillList.map((skill, i) => {
					return (
						<li
							key={`skill-${i}`}
							className='w-fit py-1 px-5 rounded-2xl font-medium text-lg'
							style={{ color: color[i], border: `1px solid` }}
						>
							{skill}
						</li>
					);
				})}
			</ul>

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

					ul {
						grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
					}
				`}
			</style>
		</section>
	);
};

export default Skills;
