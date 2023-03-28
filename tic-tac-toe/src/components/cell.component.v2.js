import { Component } from 'react';


class Cell extends Component {

    constructor(props){
        super(props);

        this.state={value:'_' };
    }

    render() {
       

        return (
            <button
                className='cell col col-4'
                onClick={()=> this.props.onCellClick(this.props.id)}
            >
                {this.props.value}
            </button>
        );

    }
}


export default Cell;