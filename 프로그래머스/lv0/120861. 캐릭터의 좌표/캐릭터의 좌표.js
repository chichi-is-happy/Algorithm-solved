function solution(keyinput, board) {
    let x = 0;
    let y = 0;

    for (let i = 0; i < keyinput.length; i++) {
        switch (keyinput[i]) {
            case "left":
                if (parseInt(board[0] / 2) >= Math.abs(x - 1)) {
                    x--;
                }
                break;
            case "right":
                if (parseInt(board[0] / 2) >= x + 1) {
                    x++;
                }
                break;
            case "up":
                if (parseInt(board[1] / 2) >= y + 1) {
                    y++;
                }
                break;
            case "down":
                if (parseInt(board[1] / 2) >= Math.abs(y - 1)) {
                    
                    y--;
                    console.log("내려감, y: ", y )
                }
                break;
        }
    }

    let result = [x, y];
    return result;
}
