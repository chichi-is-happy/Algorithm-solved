function solution(a, b) {
    function gcd(a, b) {
        if (b === 0) return a;
        return gcd(b, a % b);
    }
    
    function hasOtherPrimeFactors(num) {
        while (num % 2 === 0) {
            num /= 2;
        }
        while (num % 5 === 0) {
            num /= 5;
        }
        return num > 1;
    }
    
    const gcdValue = gcd(a, b);
    const simplifiedA = a / gcdValue;
    const simplifiedB = b / gcdValue;
    
    if (hasOtherPrimeFactors(simplifiedB)) {
        return 2;
    } else {
        return 1;
    }
}
