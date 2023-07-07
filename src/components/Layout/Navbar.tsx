import { useState } from "react";
import {
	Navbar,
	Text,
	createStyles,
	Group,
	Code,
	rem,
	getStylesRef,
} from "@mantine/core";

import {
	IconHome2,
	IconFingerprint,
	IconLogout,
	IconSwitchHorizontal,
} from "@tabler/icons";
import Logo from "../Logo";

export function _Navbar({ opened }: { opened: boolean }) {
	return (
		<Navbar
			p="md"
			hiddenBreakpoint="sm"
			hidden={!opened}
			width={{ sm: 200, lg: 300 }}
		>
			<Text>Navbar</Text>
		</Navbar>
	);
}

const useStyles = createStyles(theme => ({
	header: {
		paddingBottom: theme.spacing.md,
		marginBottom: `calc(${theme.spacing.md} * 1.5)`,
		borderBottom: `1 solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
		}`,
	},

	footer: {
		paddingTop: theme.spacing.md,
		marginTop: theme.spacing.md,
		borderTop: `${rem(1)} solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
		}`,
	},

	link: {
		...theme.fn.focusStyles(),
		display: "flex",
		alignItems: "center",
		textDecoration: "none",
		fontSize: theme.fontSizes.sm,
		color:
			theme.colorScheme === "dark"
				? theme.colors.dark[1]
				: theme.colors.gray[7],
		padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
		borderRadius: theme.radius.sm,
		fontWeight: 500,

		"&:hover": {
			backgroundColor:
				theme.colorScheme === "dark"
					? theme.colors.dark[6]
					: theme.colors.gray[0],
			color: theme.colorScheme === "dark" ? theme.white : theme.black,

			[`& .${getStylesRef("icon")}`]: {
				color: theme.colorScheme === "dark" ? theme.white : theme.black,
			},
		},
	},

	linkIcon: {
		ref: getStylesRef("icon"),
		color:
			theme.colorScheme === "dark"
				? theme.colors.dark[2]
				: theme.colors.gray[6],
		marginRight: theme.spacing.sm,
	},

	linkActive: {
		"&, &:hover": {
			backgroundColor: theme.fn.variant({
				variant: "light",
				color: theme.primaryColor,
			}).background,
			color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
				.color,
			[`& .${getStylesRef("icon")}`]: {
				color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
					.color,
			},
		},
	},
}));

const data = [
	{ link: "", label: "RIP calculator", icon: IconHome2 },
	{ link: "", label: "RIP validator", icon: IconFingerprint },
];

export default function NavbarSimple() {
	const { classes, cx } = useStyles();
	const [active, setActive] = useState(0);

	const links = data.map((item, i) => (
		<a
			className={cx(classes.link, {
				[classes.linkActive]: i === active,
			})}
			href={item.link}
			key={item.label}
			onClick={event => {
				event.preventDefault();
				setActive(i);
			}}
		>
			<item.icon className={classes.linkIcon} stroke={1.5} />
			<span>{item.label}</span>
		</a>
	));

	return (
		<Navbar height={700} width={{ sm: 300 }} p="md">
			<Navbar.Section grow>
				<Group className={classes.header} position="apart">
					<Logo colorScheme="dark" />
					<Code sx={{ fontWeight: 700 }}>{__APP_VERSION__}</Code>
				</Group>
				{links}
			</Navbar.Section>
		</Navbar>
	);
}
