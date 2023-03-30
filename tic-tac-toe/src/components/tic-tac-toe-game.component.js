import { Component } from 'react';
import Board from './board.component';
import GameStatus from './game-status.component';
import { checkGameStatus } from '../services/game-rule';

class TicTacToeGame extends Component {

    getInitialState() {
        return {
            cells: [
                null, null, null,
                null, null, null,
                null, null, null
            ],
            player: 'O',
            moves: 0,
            gameOver: false,
            winner: null,
            winningCombo: null,
            status: `Next Player 'O'`
        };
    }
    constructor(props) {
        super(props);

        this.state = this.getInitialState()
    }


    handleCellClick = (id) => {

        var cells = [...this.state.cells]; //create new arra with current state values
        if (cells[id] !== null)  //cell has a previous value
            return; //do not update cell again

        cells[id] = this.state.player;
        this.setState({ cells: cells, moves: this.state.moves + 1 });

        var status = checkGameStatus(cells);

        this.setState({ ...status }); //set winner,winningCombo,gameOver

        if (status.gameOver === false) {
            var player = this.state.player === 'O' ? 'X' : 'O';
            this.setState({
                player: player,
                status: `Next Player is '${player}'`

            });
        } else if (status.winner)
            this.setState({ status: `'${status.winner}' Wins` });
        else
            this.setState({ status: 'Game Ends in Draw' });





    }

    handleReset = () => {
        this.setState(this.getInitialState());
    }

    render = () => {

        var gameStyle = {
            padding: 15,
            //border:'2px solid blue',
        };
        var boardColumnStyle = {
            //textAlign:'center'
        };

        var resetStyle = {
            margin: "5px"
        };

        return (
            <div className='game row' style={gameStyle}>
                <div className='col col-lg-6 col-md-6 col-xs-12 col-sm-12' style={boardColumnStyle}>
                    <GameStatus
                        statusText={this.state.status}
                        moves={this.state.moves}

                    />
                    <Board
                        cells={this.state.cells}
                        onCellClick={this.handleCellClick}
                    />
                    <button style={resetStyle}
                        class='btn btn-lg btn-danger'
                        onClick={this.handleReset}
                    >Reset</button>
                </div>
                <div className='col col-lg-6 col-md-6 col-xs-12 col-sm-12'>
                    <h2>Move List</h2>
                </div>

            </div>
        );
    };
}

export default TicTacToeGame;
