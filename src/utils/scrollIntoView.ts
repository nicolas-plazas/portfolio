import React from 'react';

const scrollIntoView =
	(element: React.RefObject<HTMLDivElement> | undefined) =>
	(e: React.MouseEvent<HTMLButtonElement>) => {
		element?.current?.scrollIntoView({ behavior: 'smooth' });
	};
export default scrollIntoView;
