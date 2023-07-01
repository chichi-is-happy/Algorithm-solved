const solution = (numlist, n) => {
    numlist.sort((a, b) => {
        const distA = Math.abs(n - a);
        const distB = Math.abs(n - b);
        
        if (distA === distB) {
            return b - a;
        } else {
            return distA - distB; 
        }
    });
    
    return numlist;
}

