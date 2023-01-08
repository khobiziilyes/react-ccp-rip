import { emptyMod, MAGIC_NUM } from "../consts";
// This function is responsible for generating the CCP Rip, from the CCP number.
// I've found the algorithm on an online forum, the code is written in VBA, and I've translated it to TypeScript.
// You can find more information about the algorithm here: https://www.mouwazaf-dz.com/t48131-topic

export default function getCcpRip(ccp: string): string {
	const ccpInt = Number.parseInt(ccp);
	const multiplied = ccpInt * 100;
	const mod = multiplied % MAGIC_NUM;

	const ripInt = 97 - ((mod + emptyMod) % MAGIC_NUM);
	const rip = String(ripInt).padStart(2, "0");

	return rip;
}
