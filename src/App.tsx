import { Button, MantineProvider } from "@mantine/core";

export default function App() {
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<Button>Is Mantine working properly?</Button>
		</MantineProvider>
	);
}
