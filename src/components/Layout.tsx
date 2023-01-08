import { useState } from "react";
import {
	AppShell,
	Navbar,
	Header,
	Footer,
	Text,
	MediaQuery,
	Burger,
	useMantineTheme,
	ActionIcon,
	Group,
	useMantineColorScheme,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";
import Logo from "./Logo";

export default function Layout({ children }: { children: React.ReactNode }) {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
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
			navbar={
				<Navbar
					p="md"
					hiddenBreakpoint="sm"
					hidden={!opened}
					width={{ sm: 200, lg: 300 }}
				>
					<Text>Navbar</Text>
				</Navbar>
			}
			footer={
				<Footer height={60} p="md">
					Footer
				</Footer>
			}
			header={
				<Header height={{ base: 50, md: 70 }} p="md">
					<MediaQuery largerThan="sm" styles={{ display: "none" }}>
						<Burger
							opened={opened}
							onClick={() => setOpened(o => !o)}
							size="sm"
							color={theme.colors.gray[6]}
							mr="xl"
						/>
					</MediaQuery>

					<Group sx={{ height: "100%" }} px={20} position="apart">
						<Logo colorScheme={colorScheme} />

						<ActionIcon
							variant="default"
							onClick={() => toggleColorScheme()}
							size={30}
						>
							{colorScheme === "dark" ? (
								<IconSun size={16} />
							) : (
								<IconMoonStars size={16} />
							)}
						</ActionIcon>
					</Group>
				</Header>
			}
		>
			{children}
		</AppShell>
	);
}
