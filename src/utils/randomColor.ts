const handleRandomColor =  (): string => {
	const colors = ['#5DD269', '#7A93DC', '#FFCD00', '#FE4450', '#FF901F'];

    return colors[Math.floor(Math.random() * colors.length)];
};

export default handleRandomColor;
