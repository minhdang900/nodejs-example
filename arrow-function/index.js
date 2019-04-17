class Prefixer {
    constructor(prefix) {
        this.prefix = prefix;
    }

    prefixArray(arr) {
        return arr.map(x => this.prefix + x);
    }
    const func1 = (x, y) => {
        return x + y;
    };
    const func2 = (x, y) => // OK
    {
        return x + y;
    };
    const func3 = (x, y) => { // OK
        return x + y;
    };
    const func4 = (x, y) // SyntaxError
        => x + y;
    const func5 = (x, y) => // OK
        x + y;
}
module.exports = new Prefixer();
