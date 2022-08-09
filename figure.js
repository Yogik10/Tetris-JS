function setFigure(numb, figure) {
    figure.numb = numb;
    switch (numb) {
        // |_|_|_|_|
        case 0:
            figure[0].x = 0;
            figure[0].y = 0;
            figure[1].x = 1;
            figure[1].y = 0;
            figure[2].x = 2;
            figure[2].y = 0;
            figure[3].x = 3;
            figure[3].y = 0;
            break;
        //  |_|_|
        //  |_|_|
        case 1:
            figure[0].x = 1;
            figure[0].y = -1;
            figure[1].x = 2;
            figure[1].y = -1;
            figure[2].x = 1;
            figure[2].y = 0;
            figure[3].x = 2;
            figure[3].y = 0;
            break;
        //  |_|
        //  |_|
        //  |_|_|
        case 2:
            figure[0].x = 1;
            figure[0].y = 0;
            figure[1].x = 2;
            figure[1].y = 0;
            figure[2].x = 1;
            figure[2].y = -1;
            figure[3].x = 1;
            figure[3].y = -2;
            break;
        //    |_|
        //    |_|
        //  |_|_|
        case 3:
            figure[0].x = 1;
            figure[0].y = 0;
            figure[1].x = 2;
            figure[1].y = 0;
            figure[2].x = 2;
            figure[2].y = -1;
            figure[3].x = 2;
            figure[3].y = -2;
            break;
        //  |_|
        //  |_|_|
        //    |_|
        case 4:
            figure[0].x = 1;
            figure[0].y = -1;
            figure[1].x = 2;
            figure[1].y = -1;
            figure[2].x = 1;
            figure[2].y = -2;
            figure[3].x = 2;
            figure[3].y = 0;
            break;
        //    |_|
        //  |_|_|
        //  |_|
        case 5:
            figure[0].x = 1;
            figure[0].y = -1;
            figure[1].x = 2;
            figure[1].y = -1;
            figure[2].x = 1;
            figure[2].y = 0;
            figure[3].x = 2;
            figure[3].y = -2;
            break;
        //  |_|_|_|
        //    |_|
        case 6:
            figure[0].x = 1;
            figure[0].y = -1;
            figure[1].x = 2;
            figure[1].y = -1;
            figure[2].x = 3;
            figure[2].y = -1;
            figure[3].x = 2;
            figure[3].y = 0;
            break;
    }
}


function generateFig() {
    setFigure(nextFig.numb, figure);
    for(let i = 0; i < 4; i++) {
        /*figure[i].x = nextFig[i].x + 3;
        figure[i].y = nextFig[i].y;
        figure.angle = 0;
        figure.numb = nextFig.numb;*/
        figure[i].x += 3
        figure.angle = 0;

        nextFig[i].x = nextNextFig[i].x;
        nextFig[i].y = nextNextFig[i].y;
        nextFig.numb = nextNextFig.numb;
    }
    setFigure(Math.floor(Math.random() * 7), nextNextFig);
    addFigOnField();
    paintNext()
}