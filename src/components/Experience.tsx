import { useInView } from 'react-intersection-observer';
import { useTypewriter, useBlink } from '../hooks/useTypewriter';

const Experience = () => {
	const { ref, inView } = useInView({
		/* Optional options */
		threshold: 0,
	});

	const sectionTitle = 'Experience';
	const sectionTitleWithTypeWriterEffect = useTypewriter(sectionTitle, 150, inView);
	const blinkEffect = useBlink({
		textWithoutEffect: sectionTitle,
		textWithEffect: sectionTitleWithTypeWriterEffect,
		speed: 500,
		repeated: 3,
	});

	return (
		<section className='min-h-screen flex flex-col justify-center mt-10 snap-start'>
			<h2 ref={ref} className='mb-7 text-2xl font-semibold text-cyan-/-aqua'>{`${sectionTitleWithTypeWriterEffect}${
				blinkEffect ? '|' : ''
			}`}</h2>
			{/* <p className='w-full mt-5 text-base font-normal text-chetwode-blue'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
				dolore ea est deleniti voluptate assumenda iusto velit eos blanditiis
				nulla aut eaque, iure vel possimus officiis sunt id pariatur nesciunt?
			</p> */}

			<div className='w-full h-auto p-4 rounded-lg'>
				<h3 className='mb-1 text-lg font-medium text-coral-red'>Fullstack JavaScript Developer - Verano Ingeniería</h3>
				<p className='mb-6 text-sm text-coral-red-200'>Oct 2018 - Jun 2022</p>

				<ul className='grid grid-cols-1 gap-6 text-base font-normal text-chetwode-blue'>
					<li className=''>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
						quaerat id distinctio vel quod odit corporis odio nisi minima
						perferendis modi saepe quo illum quasi, earum eum, commodi at ut.
					</li>
					<li>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
						quaerat id distinctio vel quod odit corporis odio nisi minima
						perferendis modi saepe quo illum quasi, earum eum, commodi at ut.
					</li>
					<li>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
						quaerat id distinctio vel quod odit corporis odio nisi minima
						perferendis modi saepe quo illum quasi, earum eum, commodi at ut.
					</li>
					<li>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
						quaerat id distinctio vel quod odit corporis odio nisi minima
						perferendis modi saepe quo illum quasi, earum eum, commodi at ut.
					</li>
					<li>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
						quaerat id distinctio vel quod odit corporis odio nisi minima
						perferendis modi saepe quo illum quasi, earum eum, commodi at ut.
					</li>
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
