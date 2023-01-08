import { test, expect } from "vitest";
import getCcpKey from "../utils/getCcpKey";

const testCases = [
	["111111", "39"],
	["222222", "78"],
	["123456", "19"],
	["654321", "54"],
];

test("Should return the correct CCP Key", () => {
	for (const [ccp, expected] of testCases) {
		expect(getCcpKey(ccp)).toBe(expected);
	}
});

export {};
