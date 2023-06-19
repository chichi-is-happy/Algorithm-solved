const solution = (id_pw, db) => {
    let login_id = id_pw[0];
    let login_pw = id_pw[1];

    for (let i = 0; i < db.length; i++) {
        let user_id = db[i][0];
        let user_pw = db[i][1];

        if (login_id === user_id && login_pw === user_pw) {
            return "login";
        } else if (login_id === user_id && login_pw !== user_pw) {
            return "wrong pw";
        }
    }

    return "fail";
}