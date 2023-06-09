import {Component} from 'react';
import Cell from './cell.component';

class _Board extends Component {
    
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

    _renderV1(){
    
    
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

    _renderV2(){

        var cells=[];

        for(var i=0;i<9;i++){
            var cell =<Cell value={this.state.cells[i]} 
                            id={i} 
                            onCellClick={this.handleCellClick} />;

            cells.push(cell);
        }
        

    
        return (
            <div className='board row'>
                
                {cells}
    
            </div>
        );
    }

    render(){
    
        return (
            <div className='board row'>
                
               {this.props.cells.map((cellValue,index)=>(
                    <Cell value={cellValue} 
                            id={index} 
                            onCellClick={this.props.onCellClick} />
               ))} 
    
            </div>
        );
    }

}


const Board= (props)=>{
    
    return (
        <div className='board row'>
            
           {props.cells.map((cellValue,index)=>(
                <Cell value={cellValue} 
                        id={index} 
                        onCellClick={props.onCellClick} />
           ))} 

        </div>
    );
}


export default Board;