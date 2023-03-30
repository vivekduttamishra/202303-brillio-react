
var GameStatus = (props)=>{
    return (
        <div>
            <h2>{props.statusText}</h2>
            <h3> {props.moves}/9 moves </h3>
        </div>
    );
}


export default GameStatus;