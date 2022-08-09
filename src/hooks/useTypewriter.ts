import { useState, useEffect } from 'react';

const handleTimeOutInterval = (speed = 100, callback: any) => {
	const interval = setTimeout(() => {
		callback();
	}, speed);

	return interval;
};

interface useBlinkProps {
	textWithEffect: string;
	textWithoutEffect: string;
	speed: number;
	repeated?: number;
}

/**
 * "useBlink is a custom hook that returns a boolean value that toggles between true and false at a
 * given speed."
 *
 * The first thing you'll notice is that the function takes in an object as a parameter. This object is
 * called params and it has three properties: textWithEffect, textWithoutEffect, and speed
 * @param {useBlinkProps} params - useBlinkProps
 * @returns A boolean value that is used to determine whether or not to render the textWithEffect or
 * textWithoutEffect.
 */
const useBlink = (params: useBlinkProps) => {
	const {
		textWithEffect,
		textWithoutEffect,
		speed,
		repeated = 0,
	} = params;
	const [blink, setBlink] = useState(true);
	const [count, setCount] = useState(0);

	useEffect(() => {
		const interval = handleTimeOutInterval(speed, () => {
			if (textWithEffect === textWithoutEffect) {
				if (count <= repeated) {
					setBlink(!blink);
					setCount(count + 1);
				} else {
					setBlink(false);
					clearTimeout(interval);
				}
			}
		});

		return () => {
			clearTimeout(interval);
		};
	}, [blink, textWithEffect, count]);

	return blink;
};

/**
 * "useTypewriter is a function that takes a string and a number and returns a string."
 *
 * The first line of the function is a TypeScript type annotation. It's a way of telling TypeScript
 * what the function's inputs and outputs are
 * @param {string} text - string - The text you want to type out
 * @param {number} speed - The speed at which the text will be typed out.
 * @returns A string that is being updated by the useEffect hook.
 */
const useTypewriter = (text: string, speed: number, activate = false) => {
	const [word, setWord] = useState('');

	useEffect(() => {
		if (activate) {
			const interval = handleTimeOutInterval(speed, () => {
				if (word.length < text.length) {
					setWord(word + text[word.length]);
				}
			});

			return () => {
				clearTimeout(interval);
			};
		}
	}, [word, activate]);

	return word;
};

export { useBlink, useTypewriter };
