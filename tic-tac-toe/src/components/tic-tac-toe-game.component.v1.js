
import Board from './board.component';
import GameStatus from './game-status.component';

var TicTacToeGame = () => {

    var gameStyle={
        padding:15,
        //border:'2px solid blue',
    };
    var boardColumnStyle={
        //textAlign:'center'
    };

   
    var resetStyle={
        margin:"5px"
    };

    return (
        <div className='game row' style={gameStyle}>
            <div className='col col-lg-6 col-md-6 col-xs-12 col-sm-12' style={boardColumnStyle}>
                <GameStatus/>
                <Board/>
                <button style={resetStyle} class='btn btn-lg btn-danger'>Reset</button>
            </div>
            <div className='col col-lg-6 col-md-6 col-xs-12 col-sm-12'>
                <h2>Move List</h2>
            </div>

        </div>
    );
};

export default TicTacToeGame;
