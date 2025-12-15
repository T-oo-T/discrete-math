import { set } from "../src/set.ts"
// @ts-ignore
import { describe, test } from "node:test"
// @ts-ignore
import assert from "assert/strict"

describe("set", () => {
    test("set", () => {
        assert.deepEqual(
            set(1,1,2,3,4,5,5).vals(), 
            set(1,2,3,4,5).vals()
        )
    })

    test("has", () => {
        assert.deepEqual(set(1,2,3).has(1), true)
        assert.deepEqual(set(1,2,3).has(5), false)
    })

    test("union", () => {
        assert.deepEqual(
            set(1,2,3,4).union(set(4,5,6,7,8)).vals(),
            set(1,2,3,4,5,6,7,8).vals()
        )
    })

    test("intersection", () => {
        assert.deepEqual(
            set(1,2,3,4).intersection(set(4,5,6,7,8)).vals(),
            set(4).vals()
        )
    })

    test("delete", () => {
        assert.deepEqual(set(1,2,3).delete(1).vals(), set(2,3).vals())
        assert.deepEqual(set(1,2,3).delete(5).vals(), set(1,2,3).vals())
    })

    test("difference", () => {
        assert.deepEqual(
            set(1,2,3,4).difference(set(4,5,6,7,8)).vals(),
            set(1,2,3).vals()
        )
    })

    test("symmetricDifference", () => {
        assert.deepEqual(
            set(1,3,8).symmetricDifference(set(1,2,4,8)),
            set(2,3,4)
        )
    })
})
