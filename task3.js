function nod(n, m) {
    if(m > 0) {
        var k = n%m;
        return nod(m, k);
    }
    else {
        return abs(n);
    }
}
n = process.argv[2]
m = process.argv[3]
console.log(nod(n, m))