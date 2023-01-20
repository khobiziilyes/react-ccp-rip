import React from "react";
import { ColorScheme } from "@mantine/core";

export default function Logo({ colorScheme }: { colorScheme: ColorScheme }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 623 163"
			width={100}
		>
			<circle
				cx="50"
				cy="50"
				r="100"
				stroke="black"
				strokeWidth="3"
				fill={colorScheme === "dark" ? "#fff" : "#000"}
			/>
		</svg>
	);
}
