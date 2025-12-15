type NestedArray = number[] | NestedArray[]

export class MySet {
    dict: {}

    constructor(vals: NestedArray) {
        this.dict = {}
        for (let i = 0; i < vals.length; i++) {
            this.add(vals[i])
        }
    }

    vals(): NestedArray {
        return Object.keys(this.dict).map(key => JSON.parse(key))
    }
    
    has(key: number | NestedArray) {
        return this.dict[JSON.stringify(key)] == true
    }

    add(key: any) {
        this.dict[JSON.stringify(key)] = true
    }

    delete(key: number) {
        let res = set()
        let vvals = this.vals()

        for (let i = 0; i < vvals.length; i++) {
            if (vvals[i] != key) {
                res.add(vvals[i])
            }
        }
        
        return res
    }

    union(b: MySet) {
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

    intersection(b: MySet) {
        let res = set()
        let bvals = b.vals()

        for (let i = 0; i < bvals.length; i++) {
            if (this.has(bvals[i])) {
                res.add(bvals[i])
            }
        }
        
        return res
    }

    difference(b: MySet) {
        let res = set()
        let avals = this.vals()
        
        for (let i = 0; i < avals.length; i++) {
            if (!b.has(avals[i])) {
                res.add(avals[i])
            }
        }

        return res
    }

    symmetricDifference(b: MySet) {
        return this.union(b).difference(this.intersection(b))
    }

    cartesianProduct(b: MySet): MySet {
        let res = set()
        for (let aval of this.vals()) {
            for (let bval of b.vals()) {
                res.add([aval, bval])
            }
        }
        return res
    }
}

export function set(...vals: NestedArray): MySet {
    return new MySet(vals)
}
