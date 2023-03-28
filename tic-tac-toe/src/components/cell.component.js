

var Cell = (props) => {

    var style={
        cursor: props.value===null?'pointer':'not-allowed'
    }

    return (
        <button style={style}
            className='cell col col-4'
            onClick={() => props.onCellClick(props.id)}
        >
            {props.value}
        </button>
    );

};



export default Cell;