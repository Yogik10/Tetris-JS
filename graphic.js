function addFigOnField() {
    for(let i = 0; i < 4; i++) {
        if (figure[i].y >= 0)
            field[figure[i].y][figure[i].x] = true;
    }
}


function deleteFigFromField() {
    for(let i = 0; i < 4; i++) {
        if (figure[i].y >= 0)
            field[figure[i].y][figure[i].x] = false;
    }
}


function paintNext() {
    ctxNext.clearRect(0, 0, canvasNext.width, canvasNext.height);
    ctxNextNext.clearRect(0, 0, canvasNextNext.width, canvasNextNext.height);
    ctxNext.fillStyle = "#000000";
    ctxNextNext.fillStyle = "#000000";
    ctxNext.fillRect (0, 0, canvasNext.width, canvasNext.height);
    ctxNextNext.fillRect (0, 0, canvasNextNext.width, canvasNextNext.height);
    for(let i = 0; i < 4; i++) {
        let y = nextFig[i].y + 3;
        let yn = nextNextFig[i].y + 3;
        ctxNext.fillStyle = "#FF0000";
        ctxNextNext.fillStyle = "#FF0000";
        ctxNext.fillRect((nextFig[i].x + 1) * 30, y*30, 30, 30);
        ctxNextNext.fillRect((nextNextFig[i].x + 1) * 30, yn*30, 30, 30);
        ctxNext.strokeRect( (nextFig[i].x + 1) * 30, y*30, 30, 30);
        ctxNextNext.strokeRect( (nextNextFig[i].x + 1) * 30, yn*30, 30, 30);
    }
}


function paint() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000000";
    ctx.fillRect (0, 0, canvas.width, canvas.height);
    for (let y = 0; y < 20; y++) {
        for(let x = 0; x < 10; x++) {
            if (field[y][x] === true) {
                ctx.fillStyle = "#ff0000";
                ctx.fillRect(x * canvas.width / 10, y * canvas.height / 20, canvas.width / 10, canvas.height / 20);
                ctx.strokeRect(x * canvas.width / 10, y * canvas.height / 20, canvas.width / 10, canvas.height / 20);
            }
        }
    }
}