import {
	Header,
	MediaQuery,
	Burger,
	ActionIcon,
	Group,
	useMantineColorScheme,
	useMantineTheme,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";
import Logo from "../Logo";

export default function _Header({
	opened,
	setOpened,
}: {
	opened: boolean;
	setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const theme = useMantineTheme();

	return (
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
	);
}
