import { createContext } from 'react';

export type ISectionsRefContext = {
	divToScrollTop: React.RefObject<HTMLDivElement>;
	presentation: React.RefObject<HTMLDivElement>;
	skills: React.RefObject<HTMLDivElement>;
	experience: React.RefObject<HTMLDivElement>;
	projects: React.RefObject<HTMLDivElement>;
	contact: React.RefObject<HTMLDivElement>;
}

export const SectionsRefContext = createContext<ISectionsRefContext | null>(null);
