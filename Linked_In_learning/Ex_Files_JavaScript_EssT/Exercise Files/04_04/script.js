function findBiggestFraction(a,b) {
    var result;
    a>b ? result = ["FirstFraction", a] : result = ["secondFraction", b];
    return result;
}

var firstFraction = 3/4;
var secondFraction = 5/7;

console.log(findBiggestFraction(firstFraction,secondFraction));
