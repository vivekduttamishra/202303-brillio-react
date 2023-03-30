import AppHeader from "./components/app-header.component";
import TicTacToeGame from './components/tic-tac-toe-game.component';
import Clock from './components/clock.component';

var App = () =>{
    return <div className='app-body'>
            <AppHeader title='Tic Tac Toe Magic' />
            <Clock/>
            <TicTacToeGame/>
        </div>;
}

export default App;