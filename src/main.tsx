import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@mantine/core/styles.css';
import './styles/index.css';
import App from './App.tsx';
import { MantineProvider } from '@mantine/core';
import { emotionTransform, MantineEmotionProvider } from '@mantine/emotion';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MantineProvider defaultColorScheme='dark' stylesTransform={emotionTransform}>
			<MantineEmotionProvider>
				<App />
			</MantineEmotionProvider>
		</MantineProvider>
	</StrictMode>
);
