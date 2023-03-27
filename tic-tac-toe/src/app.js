import AppHeader from "./components/app-header.component";
import TicTacToeGame from './components/tic-tac-toe-game.component';

var App = () =>{
    return <div className='app-body'>
            <AppHeader title='Tic Tac Toe Magic' />
            <TicTacToeGame/>
        </div>;
}

export default App;