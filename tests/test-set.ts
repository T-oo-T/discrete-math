import { set, powerSet } from "../src/set.ts"
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

    describe("size", () => {
        test("empty set", () => {
            assert.equal(set().size(),0)
        })
        
        test("3 distinct items #1", () => {
            assert.equal(set(1,2,3).size(),3)
        })

        test("3 distinct items #2", () => {
            assert.equal(set(3,1,2,3,3).size(),3)
        })
    })

    describe("cartesianProduct", () => {
        test("empty case", () => {
            let A = set()
            let B = set()
            assert.deepEqual(A.cartesianProduct(B).vals(), [])
        })

        test("normal case #1", () => {
            let A = set(4,5,6)
            let B = set(7,8)
            assert.deepEqual(
                A.cartesianProduct(B).vals(),
                [
                    [4,7],
                    [4,8],
                    [5,7],
                    [5,8],
                    [6,7],
                    [6,8]
                ]
            )
        })

        test("normal case #2", () => {
            let A = set(1,5,7)
            let B = set(4,6)
            assert.deepEqual(
                A.cartesianProduct(B).vals(),
                [
                    [1,4],
                    [1,6],
                    [5,4],
                    [5,6],
                    [7,4],
                    [7,6]
                ]
            )
        })

        test("normal case #3", () => {
            let A = set(4,6)
            let B = set(1,5,7)
            assert.deepEqual(
                A.cartesianProduct(B).vals(),
                [
                    [4,1],
                    [4,5],
                    [4,7],
                    [6,1],
                    [6,5],
                    [6,7]
                ]
            )
        })

        test("chained product", () => {
            let A = set(1,2)
            let B = set(3)
            let C = set(7)
            assert.deepEqual(
                A.cartesianProduct(B).cartesianProduct(C).vals(),
                [
                    [[1,3], 7],
                    [[2,3], 7]
                ]
            )
        })

        test("exponent", () => {
            let A = set(1,2)
            assert.deepEqual(
                A.cartesianProduct(A).vals(),
                [
                    [1,1],
                    [1,2],
                    [2,1],
                    [2,2]
                ]
            )
        })

        test("nested", () => {
            let A = set([1,2],[3,4])
            let B = set([7,8])
            assert.deepEqual(
                A.cartesianProduct(B).vals(),
                [
                    [[1,2],[7,8]],
                    [[3,4],[7,8]],
                ]
            )
        })


        test("with empty set", () => {
            let A = set(1,2,3)
            let B = set()
            assert.deepEqual(
                A.cartesianProduct(B).vals(),
                []
            )
        })
    })

    describe("powerSet", () => {
        test("empty case", () => {
            assert.deepEqual(powerSet([]), [[]])
        })

        test("one value", () => {
            assert.deepEqual(powerSet([1]), [[1], []])
        })

        test("two values", () => {
            assert.deepEqual(powerSet([1,2]), [[1,2], [1], [2], []])
        })

        test("three values", () => {
            assert.deepEqual(powerSet([1,2,3]), [
                [ 1, 2, 3 ], [ 1, 2 ],
                [ 1, 3 ],    [ 1 ],
                [ 2, 3 ],    [ 2 ],
                [ 3 ],       []
              ])
        })
    })
})
