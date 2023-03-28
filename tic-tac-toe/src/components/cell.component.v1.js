import { Component } from 'react';


class Cell extends Component {

    constructor(props){
        super(props);

        this.state={value:'_' };
    }

    render() {
        
       
        var handleClick= () =>{
            var oldValue = this.state.value;

            //var newValue = this.state.value === 'O' ? 'X' : 'O';
            if(oldValue==='_')
                this.setState({value:"O"});

            console.log(`cell value changed from '${oldValue}' to '${this.state.value}'`);

        }

        return (
            <button
                className='cell col col-4'
                onClick={handleClick}
            >
                {this.state.value}
            </button>
        );

    }
}


export default Cell;