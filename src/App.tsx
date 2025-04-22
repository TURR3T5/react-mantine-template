import { useEffect, useRef } from 'react';
import { Container, Title, Text, Button, Center } from '@mantine/core';
import { gsap } from 'gsap';

function App() {
	const titleRef = useRef<HTMLHeadingElement>(null);
	const textRef = useRef<HTMLParagraphElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const tl = gsap.timeline();

		tl.fromTo(titleRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 }).fromTo(textRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, '-=0.5').fromTo(buttonRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 }, '-=0.5');

		return () => {
			tl.kill();
		};
	}, []);

	return (
		<Container size='md'>
			<Center style={{ height: '100vh', flexDirection: 'column', gap: '1rem' }}>
				<Title ref={titleRef} order={1}>
					Welcome to My App
				</Title>
				<Text ref={textRef} size='lg' ta='center'>
					This is a default homepage built with Mantine and animated using GSAP.
				</Text>
				<Button ref={buttonRef} size='md'>
					Get Started
				</Button>
			</Center>
		</Container>
	);
}

export default App;
