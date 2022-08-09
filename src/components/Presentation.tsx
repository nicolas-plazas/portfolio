import { useInView } from 'react-intersection-observer';
import { useTypewriter, useBlink } from '../hooks/useTypewriter';

interface SkillProps {
	sectionRef: (node?: Element | null | undefined) => void;
}

const Presentation = ({ sectionRef }: SkillProps) => {
	const { ref, inView } = useInView({
		/* Optional options */
		threshold: 0,
	});

	const myRole = 'Fullstack JavaScript / TypeScript Developer';
	const myRoleWithTypeWriterEffect = useTypewriter(myRole, 150, inView);
	const blinkEffect = useBlink({
		textWithoutEffect: myRole,
		textWithEffect: myRoleWithTypeWriterEffect,
		speed: 500,
        repeated: 3,
	});

	return (
		<section ref={sectionRef} className='flex flex-col content-center justify-center min-h-screen pt-36 snap-start'>
			<h3 className='mb-5 text-base font-normal text-supernova 2xl:text-lg'>
				<span className='text-white'>Hi,</span> my name is
			</h3>
			<h1 className='text-4xl leading-none font-semibold text-coral-red 2xl:text-5xl'>
				Nicolas Plazas
			</h1>
			<h2 ref={ref} className='mt-3 mb-3 text-4xl font-semibold text-emerald-400 2xl:text-5xl'>
				{`${myRoleWithTypeWriterEffect}${blinkEffect ? '|' : ''}`}
			</h2>
			<p className='w-full mt-5 text-base font-normal text-chetwode-blue 2xl:text-lg 2xl:w-3/4'>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
				dolore ea est deleniti voluptate assumenda iusto velit eos blanditiis
				nulla aut eaque, iure vel possimus officiis sunt id pariatur nesciunt?
			</p>
			<a
				href='/'
				className='w-24 py-2 px-4 mt-12 text-center text-sm font-normal text-tree-poppy border-2 border-tree-poppy rounded-2xl 2xl:text-base'
			>
				Resume
			</a>
		</section>
	);
};

export default Presentation;
