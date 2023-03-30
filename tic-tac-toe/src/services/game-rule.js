


export const checkGameStatus = (cells) => {
    //is the game over?
    var winningCombos = [
        //row wins
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        //column wins
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        //diagonal wins
        [0, 4, 8],
        [2, 4, 6]
    ];



    for (var combo of winningCombos) {
        var [x, y, z] = combo; //in first case x=0 y=1, z=2

        if (cells[x] !== null && cells[x] === cells[y] && cells[x] === cells[z]) {
            //we have a winner
            return {
                winner: cells[x],
                winningCombo: combo,
                gameOver: true
            }
        }

    }

    //there was no winner
    var moves = cells.filter(c => c !== null).length;
    if (moves === 9)
        return { gameOver: true, winner: null };
    else
        return { gameOver: false, winner: null };



};



