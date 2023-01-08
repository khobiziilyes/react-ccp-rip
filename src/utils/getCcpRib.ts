import getCcpRip from "./getCcpRip";
import { emptyCcp, algeriePosteCode } from "../consts";

export default function getCcpRib(ccp: string): string {
	const rip = getCcpRip(ccp);
	const fullRip = emptyCcp + BigInt(`${ccp}${rip}`);
	const rib = `${algeriePosteCode}${fullRip}`.padStart(20, "0");

	return rib;
}
