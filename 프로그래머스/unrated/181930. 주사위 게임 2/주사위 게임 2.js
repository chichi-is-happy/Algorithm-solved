function solution(a, b, c) {
    let score = 0;

    if (a === b && b === c) {
        score = (a + b + c) * (a * a + b * b + c * c) * (a * a * a + b * b * b + c * c * c);
    } else if (a === b || b === c || c === a) {
        score = (a + b + c) * (a * a + b * b + c * c);
    } else {
        score = a + b + c;
    }

    return score;
}


