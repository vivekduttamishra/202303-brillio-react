import {Component} from 'react';
import Cell from './cell.component';

class Board extends Component {
    
    constructor(props){
        super(props);

        this.state={
            cells: [
                    null,null,null,
                    null,null,null,
                    null,null,null
                    ],
            player:'O'
        }
    }

    handleCellClick= (id)=>{
        
        var cells = [...this.state.cells]; //create new arra with current state values
        if(cells[id]!==null)  //cell has a previous value
            return ; //do not update cell again

        cells[id]=this.state.player;
        this.setState({cells:cells});

        var nextPlayer = this.state.player==='O'?'X':'O';

        this.setState({player:nextPlayer});
        
        console.log(`cell #${id} is clicked`);
        
    }

    render(){
    
    
        return (
            <div className='board row'>
                <Cell value={this.state.cells[0]} id={0} onCellClick={this.handleCellClick} />
                <Cell value={this.state.cells[1]} id={1} onCellClick={this.handleCellClick}/>
                <Cell value={this.state.cells[2]} id={2} onCellClick={this.handleCellClick}/>
                
                <Cell value={this.state.cells[3]} id={3} onCellClick={this.handleCellClick} />
                <Cell value={this.state.cells[4]} id={4} onCellClick={this.handleCellClick}/>
                <Cell value={this.state.cells[5]} id={5} onCellClick={this.handleCellClick}/>
                
                <Cell value={this.state.cells[6]} id={6} onCellClick={this.handleCellClick} />
                <Cell value={this.state.cells[7]} id={7} onCellClick={this.handleCellClick}/>
                <Cell value={this.state.cells[8]} id={8} onCellClick={this.handleCellClick}/>
                
                
    
            </div>
        );
    }

}


export default Board;