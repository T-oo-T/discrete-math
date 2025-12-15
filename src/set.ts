export class MySet {
    dict: {}

    constructor(vals) {
        this.dict = {}
        for (let i = 0; i < vals.length; i++) {
            this.add(vals[i])
        }
    }

    vals() {
        return Object.keys(this.dict)
    }
    
    has(key) {
        return this.dict[key] == true
    }

    add(key) {
        this.dict[key] = true
    }

    delete(key) {
        let res = set()
        let vvals = this.vals()

        for (let i = 0; i < vvals.length; i++) {
            if (vvals[i] != key) {
                res.add(vvals[i])
            }
        }
        
        return res
    }

    union(b) {
        let res = set()
        let avals = this.vals()
        let bvals = b.vals()
        
        for (let i = 0; i < avals.length; i++) {
            res.add(avals[i])
        }

        for (let i = 0; i < bvals.length; i++) {
            res.add(bvals[i])
        }

        return res
    }

    intersection(b) {
        let res = set()
        let bvals = b.vals()

        for (let i = 0; i < bvals.length; i++) {
            if (this.has(bvals[i])) {
                res.add(bvals[i])
            }
        }
        
        return res
    }

    difference(b) {
        let res = set()
        let avals = this.vals()
        
        for (let i = 0; i < avals.length; i++) {
            if (!b.has(avals[i])) {
                res.add(avals[i])
            }
        }

        return res
    }

    symmetricDifference(b) {
        return this.union(b).difference(this.intersection(b))
    }
}

export function set(...vals) {
    return new MySet(vals)
}
