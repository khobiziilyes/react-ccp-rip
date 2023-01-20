import { createStyles } from "@mantine/core";
import type { MantineTheme } from "@mantine/core";

export function getGradient(theme: MantineTheme, variant: "text" | "bg") {
	if (variant === "text") {
		return `linear-gradient(52deg, ${
			theme.colors.blue[theme.colorScheme === "dark" ? 5 : 7]
		} 3%, ${theme.colors.cyan[theme.colorScheme === "dark" ? 4 : 5]} 97%)`;
	}

	return `linear-gradient(52deg, ${
		theme.colors.blue[theme.colorScheme === "dark" ? 7 : 7]
	} 3%, ${theme.colors.cyan[theme.colorScheme === "dark" ? 7 : 5]} 97%)`;
}

export default createStyles(theme => {
	const backgroundImage = getGradient(theme, "bg");

	return {
		featureIcon: {
			color: theme.white,
			borderRadius: theme.radius.md,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			minWidth: 50,
			height: 50,
			backgroundImage,
			"& svg": {
				display: "block",
			},
		},
	};
});
