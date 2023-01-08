// This function is responsible for generating the CCP Rip, from the CCP number.
// I've found the algorithm on an online forum, the code is written in VBA, and I've translated it to TypeScript.
// You can find more information about the algorithm here: https://www.mouwazaf-dz.com/t48131-topic

const MAGIC_NUM = 97;
const emptyCcp = 99999000000000000;
const emptyMod = emptyCcp % MAGIC_NUM; // Always 85, left here for clarity.

export default function getCcpRip(ccp: string): string {
	const ccpInt = Number.parseInt(ccp);
	const multiplied = ccpInt * 100;
	const mod = multiplied % MAGIC_NUM;

	const ripInt = 97 - ((mod + emptyMod) % MAGIC_NUM);
	const rip = String(ripInt).padStart(2, "0");

	return rip;
}
