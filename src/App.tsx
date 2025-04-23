import { useNuiEvent } from './utils/useNuiEvent';
import { fetchNui } from './utils/fetchNui';
import { useAppStore } from './store/useAppStore';
import { Container, Title, Center, Button } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';

export default function App() {
	const { isOpen, data, open, close } = useAppStore();

	// Lyt til NUI "open" event fra fx Lua
	useNuiEvent<any>('openApp', (payload) => {
		open(payload); // fx payload = { msg: "Velkommen" }
	});

	useHotkeys([
		[
			'Escape',
			() => {
				close();
				fetchNui('closeApp');
			},
		],
	]);

	if (!isOpen) return null; // App er lukket

	return (
		<Container>
			<Center style={{ height: '100vh', flexDirection: 'column', gap: '1rem' }}>
				<Title order={2}>{data?.msg || 'Hello from NUI'}</Title>
				<Button color='red' onClick={close}>
					Luk
				</Button>
			</Center>
		</Container>
	);
}
