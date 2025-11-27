const {
    set,
    symmetricDifference
} = require("../src/set")
const { test } = require("node:test")
const assert = require("assert").strict

test("set", () => {
    assert.deepEqual(set(1,1,2,3,4,5,5).vals(), set(1,2,3,4,5).vals())
})

/*test("symmetricDifference", () => {
    assert.strictEqual(
        symmetricDifference(set(1,3,8), set(1,2,4,8)),
        set(2,3,4)
    )
})*/