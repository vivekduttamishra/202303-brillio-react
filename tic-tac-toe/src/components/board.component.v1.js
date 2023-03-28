import {Component} from 'react';
import Cell from './cell.component';


var Board = (props)=>{

    var handleCellClick= (id)=>{
        console.log(`cell #${id} is clicked`);
    }

    return (
        <div className='board row'>
            <Cell value='' id={0} onCellClick={handleCellClick} />
            <Cell value='' id={1} onCellClick={handleCellClick}/>
            <Cell value='' id={2} onCellClick={handleCellClick}/>
            
            <Cell value=''/>
            <Cell value='' />
            <Cell value='' />

            <Cell value='' />
            <Cell value='' />
            <Cell value='' />

        </div>
    );
}


export default Board;