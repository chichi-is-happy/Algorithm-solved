
const solution = (numer1, denom1, numer2, denom2) => {
    const commonDenom = denom1 * denom2;

    const expandedNumer1 = numer1 * denom2;
    const expandedNumer2 = numer2 * denom1;

    const sumNumer = expandedNumer1 + expandedNumer2;

    const gcd = getGCD(sumNumer, commonDenom);

    const simplifiedNumer = sumNumer / gcd;
    const simplifiedDenom = commonDenom / gcd;

    return [simplifiedNumer, simplifiedDenom];
}

const getGCD = (a, b) => {
    if (b === 0) {
        return a;
    }
    return getGCD(b, a % b);
}
