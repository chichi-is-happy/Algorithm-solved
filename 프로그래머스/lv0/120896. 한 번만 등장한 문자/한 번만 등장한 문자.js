const solution = (s) =>{
    const counts = {};
    for (let char of s) {
        counts[char] = (counts[char] || 0) + 1;
    }
    const uniqueChars = [];
    for (let char in counts) {
        if (counts[char] === 1) {
            uniqueChars.push(char);
        }
    }
    return uniqueChars.sort().join('');
}