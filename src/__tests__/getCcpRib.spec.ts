import { test, expect } from "vitest";
import getCcpRib from "../utils/getCcpRib";

const testCases = [
	["111111", "00799999000011111168"],
	["222222", "00799999000022222227"],
	["123456", "00799999000012345687"],
	["654321", "00799999000065432138"],
];

test("Should return the correct CCP Rib", () => {
	for (const [ccp, expected] of testCases) {
		expect(getCcpRib(ccp)).toBe(expected);
	}
});

export {};
