const canvas = document.getElementById("canvas");
const canvasNext = document.getElementById("canvasNext");
const canvasNextNext = document.getElementById("canvasNext1");
var ctx = canvas.getContext('2d');
var ctxNext = canvasNext.getContext('2d');
var ctxNextNext = canvasNextNext.getContext('2d');
var fallingTime = 300;
var fallingInterval;
var paintInterval;
var score;

var figure = new Array(4);
var nextFig = new Array(4)
var nextNextFig = new Array(4);

for(let i = 0; i < 4; i++) {
    figure[i] = new Object();
    nextFig[i] = new Object();
    nextNextFig[i] = new Object();
}

var field = new Array(20)
for (let i = 0; i < 20; i++) {
    field[i] = new Array(10);
    for (let j = 0; j < 10; j++) {
        field[i][j] = false;
    }
}

startGame();


function isFailed(){
    for (let i = 0; i < 4; i++) {
        if (figure[i].y < 0) {
            return true;
        }
    }
    return false;
}


function gameOver(){
    clearInterval(fallingInterval);
    clearInterval(paintInterval);
    localStorage["score"] = score;

    for (let i = 0; i < 4; i++){
        if (localStorage["bestScore" + i] <= score){
            let bufName = localStorage["tetris.username"];
            let bufScore = score;
            let buf1, buf2;
            for (let j = i; j < 4; j++){
                buf1 = localStorage["bestName" + j];
                buf2 = localStorage["bestScore" + j];
                localStorage["bestName" + j] = bufName;
                localStorage["bestScore" + j] = bufScore;
                bufName = buf1;
                bufScore = buf2;
            }
            break;
        }
    }
    setTimeout(() => {window.location = "records.html"}, 2000);
}


function getSolidLineIndex(){
    let numb = 0;
    for (let y = 0; y < 20; y++) {
        for (let x = 0; x < 10; x++) {
            if (field[y][x] === true)
                numb++;
        }
        if (numb === 10)
            return y;
        numb = 0;
    }
    return -1;
}


function play(){
    let isLineFull = false;
    let isFallen = !isMovable("d");
    let y;

    while(((y = getSolidLineIndex()) !== -1) && isFallen) {
        score += 10;
        fallingTime -= 15;
        clearInterval(fallingInterval);
        fallingInterval = setInterval(play, fallingTime);
        document.getElementById("score").innerHTML = score;

        for (y; y >= 1; y--) {
            for (let x = 0; x < 10; x++) {
                field[y][x] = field[y - 1][x];
            }
        }
        isLineFull = true;
    }

    if (isLineFull || !isMovable("d")) {
        if (isFailed()) {
            gameOver();
        }
        generateFig();
        return;
    }
    falling();
}

function startGame(){
    setFigure(Math.floor(Math.random()*7), nextFig);
    setFigure(Math.floor(Math.random()*7), nextNextFig);
    generateFig(figure);
    fallingInterval = setInterval(play, fallingTime);
    paintInterval = setInterval(paint, 10);
    score = 0;
    document.getElementById("name").innerHTML = localStorage["tetris.username"];
    document.getElementById("score").innerHTML = score;
    setRecords();
}

function setRecords(){
    if (localStorage["bestName0"] === undefined){
        localStorage["bestName0"] = "God";
        localStorage["bestScore0"] = 200;
        localStorage["bestName1"] = "Hacker";
        localStorage["bestScore1"] = 100;
        localStorage["bestName2"] = "Pro";
        localStorage["bestScore2"] = 50;
        localStorage["bestName3"] = "Noob";
        localStorage["bestScore3"] = 10;
    }
}