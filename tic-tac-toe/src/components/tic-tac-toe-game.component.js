
import Board from './board.component';

var TicTacToeGame = () => {

    var gameStyle={
        padding:15,
        //border:'2px solid blue',
    };
    var boardColumnStyle={
        //textAlign:'center'
    };

    var nextPlayer='O';
    var movesPlayed=0;


    return (
        <div className='game row' style={gameStyle}>
            <div className='col col-lg-6 col-md-6 col-xs-12 col-sm-12' style={boardColumnStyle}>
                <h2>Next Move: '{nextPlayer}'</h2>
                <h3> {movesPlayed}/9 moves </h3>
                <Board/>
            </div>
            <div className='col col-lg-6 col-md-6 col-xs-12 col-sm-12'>
                <h2>Move List</h2>
            </div>

        </div>
    );
};

export default TicTacToeGame;
