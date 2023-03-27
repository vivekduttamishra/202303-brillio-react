
import Board from './board.component';

var TicTacToeGame = () => {
    return (
        <div className='game row'>
            <div className='col col-lg-6 col-md-6 col-xs-12 col-sm-12'>
                <h2>Next Move: 'X'</h2>
                <h3> 3/9 moves </h3>

                <Board/>
            </div>
            <div className='col col-lg-6 col-md-6 col-xs-12 col-sm-12'>
                <h2>Move List</h2>
            </div>

        </div>
    );
};

export default TicTacToeGame;
