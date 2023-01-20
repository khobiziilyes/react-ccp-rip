import getCcpRip from "./getCcpRip";
import { emptyCcp, algeriePosteCode } from "../consts";

export default function getCcpRib(ccp: string): string {
	const rip = getCcpRip(ccp);
	const fullRip = emptyCcp + BigInt(`${ccp}${rip}`);
	const rib = `${algeriePosteCode}${fullRip}`.padStart(20, "0");

	return rib;
}

export function formatCcpRib(rib: string): string {
	const breakpoints = [3, 8, 18];

	return [...rib]
		.map((_, i) => (breakpoints.includes(i) ? " " : "") + _)
		.join("");
}

export function getFormattedCcpRib(ccp: string): string {
	return formatCcpRib(getCcpRib(ccp));
}
