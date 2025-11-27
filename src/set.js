class MySet {
    constructor(...vals) {
        this.dict = {}
        for (let i = 0; i < vals.length; i++) {
            this.dict[vals] = true
        }
    }

    vals() {
        return Object.keys(this.dict)
    }
}

function set() {
    return new MySet()
}

function symmetricDifference() {
    return null
}

module.exports = {
    set,
    symmetricDifference
}