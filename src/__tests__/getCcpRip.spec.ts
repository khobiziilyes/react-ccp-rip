import { test, expect } from "vitest";
import getCcpRip from "../utils/getCcpRip";

const testCases = [
	["111111", "68"],
	["222222", "27"],
	["123456", "87"],
	["654321", "38"],
];

test("Should return the correct CCP Rip", () => {
	for (const [ccp, expected] of testCases) {
		expect(getCcpRip(ccp)).toBe(expected);
	}
});

export {};
