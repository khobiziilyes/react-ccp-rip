import {
	MantineProvider,
	ColorSchemeProvider,
	ColorScheme,
	Text,
} from "@mantine/core";
import { useColorScheme, useLocalStorage } from "@mantine/hooks";

import Layout from "./components/Layout";

export default function App() {
	const preferredColorScheme = useColorScheme();

	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: "mantine-color-scheme",
		defaultValue: preferredColorScheme,
		getInitialValueInEffect: true,
	});

	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<MantineProvider
				theme={{ colorScheme }}
				withGlobalStyles
				withNormalizeCSS
			>
				<Layout>
					<Text>Content</Text>
				</Layout>
			</MantineProvider>
		</ColorSchemeProvider>
	);
}
