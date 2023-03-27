import Cell from './cell.component';


var Board = (props)=>{
    return (
        <div className='board row'>
            <Cell value='O' />
            <Cell/>
            <Cell/>
            
            <Cell/>
            <Cell value='X' />
            <Cell/>

            <Cell/>
            <Cell/>
            <Cell value='O' />

        </div>
    );
}


export default Board;