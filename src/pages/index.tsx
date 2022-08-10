import type { NextPage } from 'next';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import Layout from '../components/layout/Layout';
import Presentation from '../components/Presentation';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';

import {
	SectionsRefContext,
	ISectionsRefContext,
} from '../context/SectionsRefContext';

const Home: NextPage = () => {
	const { ref, inView } = useInView({
		threshold: 0,
	});

	const sectionsContext = {
		divToScrollTop: useRef(null),
		presentation: useRef(null),
		skills: useRef(null),
		experience: useRef(null),
		projects: useRef(null),
		contact: useRef(null),
	} as ISectionsRefContext;

	return (
		<SectionsRefContext.Provider value={sectionsContext}>
			<Layout presentationIsFocused={inView}>
				<Presentation sectionRef={ref} />
				<Skills />
				<Experience />
				<Projects />
			</Layout>
		</SectionsRefContext.Provider>
	);
};

export default Home;
