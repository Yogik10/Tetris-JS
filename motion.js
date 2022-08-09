function falling() {
    deleteFigFromField();
    for (let i = 0; i < 4; i++) {
        (figure[i].y)++;
    }
    addFigOnField();
}


function isMovable(directStr) {
    deleteFigFromField();

    switch (directStr) {
        case "d":
            for (let i = 0; i < 4; i++) {
                if (figure[i].y === 19 || ((figure[i].y >= 0) && (field[figure[i].y + 1][figure[i].x] === true))) {
                    addFigOnField();
                    return false;
                }
            }
            break;

        case "r":
            for (let i = 0; i < 4; i++) {
                if ((figure[i].x === 9) || (figure[i].y >= 0 && field[figure[i].y][figure[i].x + 1] === true)) {
                    addFigOnField();
                    return false;
                }
            }
            break;

        case "l":
            for (let i = 0; i < 4; i++) {
                if ((figure[i].x === 0) || (figure[i].y >= 0 && field[figure[i].y][figure[i].x - 1] === true)) {
                    addFigOnField();
                    return false;
                }
            }
            break;
    }
    addFigOnField();
    return true;
}


function rotate() {
    switch(figure.angle) {
        case 0:
            setNewAngle(90, rotationOffsets90);
            break;
        case 90:
            setNewAngle(180, rotationOffsets180);
            break;
        case 180:
            setNewAngle(270, rotationOffsets270);
            break;
        case 270:
            setNewAngle(0, rotationOffsets0);
            break;
    }
}


function setNewAngle(angle, array){
    for (let i = 0; i < 4; i++) {
        let x = figure[i].x + array[figure.numb][i][0];
        let y = figure[i].y + array[figure.numb][i][1];
        if (x < 0 || x > 9 || y < 0 || y > 19 || field[y][x] === true)
            return;
    }

    for (let i = 0; i < 4; i++) {
        figure[i].x += array[figure.numb][i][0]
        figure[i].y += array[figure.numb][i][1]
    }
    figure.angle = angle;
}


const rotationOffsets90 = [
    // |_|_|_|_|
    [[2,-2],[1,-1],[0,0],[-1,1]],
    //square
    [[0,0],[0,0],[0,0],[0,0]],
    //  |_|
    //  |_|
    //  |_|_|
    [[-1,-1],[-2,0],[0,0],[1,1]],
    //    |_|
    //    |_|
    //  |_|_|
    [[0,-2],[-1,-1],[0,0],[1,1]],
    //  |_|
    //  |_|_|
    //    |_|
    [[1,-1],[0,0],[2,0],[-1,-1]],
    //    |_|
    //  |_|_|
    //  |_|
    [[1,-1],[0,0],[0,-2],[1,1]],
    //  |_|_|_|
    //    |_|
    [[1,-1],[0,0],[-1,1],[-1,-1]]
]
const rotationOffsets180 = [
    //   |_|
    //   |_|
    //   |_|
    //   |_|
    [[-2,2],[-1,1],[0,0],[1,-1]],
    //square
    [[0,0],[0,0],[0,0],[0,0]],
    //  |_||_||_|
    //  |_|
    [[1,-1],[0,-2],[0,0],[-1,1]],
    //  |_|
    //  |_||_||_|
    [[2,0],[1,-1],[0,0],[-1,1]],
    //    |_||_|
    //  |_|_|
    [[1,1],[0,0],[0,2],[1,-1]],
    //  |_||_|
    //     |_||_|
    [[1,1],[0,0],[2,0],[-1,1]],
    //     |_|
    //  |_||_|
    //     |_|
    [[1,1],[0,0],[-1,-1],[1,-1]]
]
const rotationOffsets270 = [
    // |_|_|_|_|
    [[2,-2],[1,-1],[0,0],[-1,1]],
    //square
    [[0,0],[0,0],[0,0],[0,0]],
    //  |_||_|
    //     |_|
    //     |_|
    [[1,1],[2,0],[0,0],[-1,-1]],
    //  |_||_|
    //  |_|
    //  |_|
    [[0,2],[1,1],[0,0],[-1,-1]],
    //  |_|
    //  |_||_|
    //     |_|
    [[-1,1],[0,0],[-2,0],[1,1]],
    //    |_|
    //  |_|_|
    //  |_|
    [[-1,1],[0,0],[0,2],[-1,-1]],
    //     |_|
    //  |_||_||_|
    [[-1,1],[0,0],[1,-1],[1,1]]
]
const rotationOffsets0 = [
    //   |_|
    //   |_|
    //   |_|
    //   |_|
    [[-2,2],[-1,1],[0,0],[1,-1]],
    //square
    [[0,0],[0,0],[0,0],[0,0]],
    //         |_|
    //  |_|||_||_|
    [[-1,1],[0,2],[0,0],[1,-1]],
    //  |_||_||_|
    //        |_|
    [[-2,0],[-1,+1],[0,0],[1,-1]],
    //    |_||_|
    //  |_|_|
    [[-1,-1],[0,0],[0,-2],[-1,1]],
    //  |_||_|
    //     |_||_|
    [[-1,-1],[0,0],[-2,0],[1,-1]],
    //   |_|
    //   |_||_|
    //   |_|
    [[-1,-1],[0,0],[1,1],[-1,1]]
]