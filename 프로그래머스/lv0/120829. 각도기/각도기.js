const solution = (angle) => {
    switch(true) {
        case 90 > angle && angle > 0:
            return 1;
            break;
        case angle === 90:
            return 2;
            break;
        case 90 < angle && angle < 180:
            return 3;
            break;
        case angle === 180:
            return 4;
            break;
    }
} 