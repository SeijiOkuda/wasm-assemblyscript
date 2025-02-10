import assert from "assert";
import { primeFactors } from "../build/debug.js";

assert.deepStrictEqual(primeFactors(28), [2, 2, 7]);
assert.deepStrictEqual(primeFactors(30), [2, 3, 5]);
console.log("ok");
