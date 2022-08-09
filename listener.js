read();


function haveChanges(){
    localStorage["tetris.username"] = document.getElementById("tetris.username").value;
    document.getElementById("button").disabled = localStorage["tetris.username"] === "";
}


function read(){
    if (document.getElementById("tetris.username") !== null) {
        document.getElementById("tetris.username").value = localStorage["tetris.username"];
        document.getElementById("button").disabled = localStorage["tetris.username"] === "";
    }
}


document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (keyName === "ArrowRight") {
        if (isMovable("r")){
            deleteFigFromField();
            for (let i = 0; i < 4; i++) {
                figure[i].x++
            }
            addFigOnField()
        }
    }
    if (keyName === "ArrowLeft") {
        if (isMovable("l")){
            deleteFigFromField();
            for (let i = 0; i < 4; i++) {
                figure[i].x--
            }
            addFigOnField()
        }
    }
    if (keyName === "ArrowUp") {
        deleteFigFromField();
        rotate();
        addFigOnField();
    }
    if (keyName === "ArrowDown"){
        while(isMovable("d")) {
            falling();
        }
    }
});


