import { useState } from "react";
import {
	AppShell,
	useMantineTheme,
	useMantineColorScheme,
} from "@mantine/core";

import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
	const { colorScheme } = useMantineColorScheme();
	const theme = useMantineTheme();

	const [opened, setOpened] = useState(false);

	return (
		<AppShell
			styles={{
				main: {
					background:
						colorScheme === "dark"
							? theme.colors.dark[8]
							: theme.colors.gray[0],
				},
			}}
			navbarOffsetBreakpoint="sm"
			asideOffsetBreakpoint="sm"
			navbar={<Navbar opened={opened} />}
			footer={<Footer />}
			header={<Header opened={opened} setOpened={setOpened} />}
		>
			{children}
		</AppShell>
	);
}
